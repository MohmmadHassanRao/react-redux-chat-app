import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../store/Action";

const Chat = () => {
  let currentUser = useSelector((state) => state.current_user);
  let user = useSelector((state) => state.users);
  let dipsatch = useDispatch();
  useEffect(() => {
    dipsatch(get_users());
  }, []);

  console.log(currentUser);
  console.log("users", user);
  return (
    <div>
      <h1> Welcome!{currentUser.name}</h1>
      <img src={currentUser.photo} alt="img" />
      {/* fetching users that are in database */}
      <h2>Users:</h2>
      <ul>
        {user.map((u, i) => {
          return (
            <li key={i}>
              <img src={u.photo} alt="abc" width="20" />
              {u.name}
              <button>Chat</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chat;
