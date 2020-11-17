import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../store/Action";

const Chat = () => {
  const { current_user, users } = useSelector((state) => ({
    current_user: state.current_user,
    users: state.users,
  }));
  const [chatUser, setChatUser] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  console.log("current user", current_user);
  console.log("user", users);

  // const user = useSelector((state) => state.users);
  // console.log("user", user);
  const dipsatch = useDispatch();
  useEffect(() => {
    dipsatch(get_users());
  }, [dipsatch]);

  const StartChatting = (userData) => {
    setChatUser(userData);

    // console.log("chatUser", chatUser);
  };

  const merge_uid = (uid1, uid2) => {
    if (uid2 < uid1) {
      return uid2 + uid1;
    } else {
      return uid1 + uid2;
    }
  };
  const sendMessage = () => {
    console.log(current_user);
    console.log(chatUser);
    console.log(merge_uid(current_user.uid, chatUser.uid));
    // chatMessages.push(message);
    // setChatMessages(chatMessages);
    // setMessage("");
  };
  // console.log("chat messages", chatMessages);

  return (
    <div>
      <h1> Welcome!{current_user.name}</h1>
      <img src={current_user.photo} alt={current_user.name} />
      {/* fetching users that are in database */}
      <div>
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((u, i) => {
              return (
                u.uid !== current_user.uid && (
                  <li key={i} onClick={() => StartChatting(u)}>
                    <img src={u.photo} alt={u.name} width="20" />
                    {u.name}
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div>
          {/* when a user enters a message and clicks send button his message will be displayed */}
          <h2>Start Chatting</h2>
          {/* if a user is logged in and we want chat with him then we need to click chat button i created above then below condition will run true and show user chat function otherwise it will show no users */}
          {Object.keys(chatUser).length ? (
            <div>
              <h4>
                <img src={chatUser.photo} alt="img" /> {chatUser.name}
              </h4>
              <ul>
                {chatMessages.map((u, i) => {
                  return <li key={i}>{u}</li>;
                })}
              </ul>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="send message"
              />
              <button onClick={() => sendMessage()}>send</button>
            </div>
          ) : (
            <h2>No users</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
