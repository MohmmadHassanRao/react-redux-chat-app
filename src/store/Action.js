import firebase from "../config/firebase";

// FIREBASE AUTHENTICATION
export const facebook_login = (history) => {
  return (dispatch) => {
    // setting up firebase authentication
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        // getting user info and storing it into object called createuser.
        let createUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        // console.log(createUser);
        // sending data to firebase database
        firebase
          .database()
          .ref("/")
          .child(`users/${user.uid}`)
          .set(createUser)
          // if data sent! then i will get an alert('login success')
          .then(() => {
            dispatch({ type: "SET_USER", payload: createUser });
            alert("Login Successfuly");
            history.push("chat");
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
};

// GET DATA FROM FIREBASE
export const get_users = () => {
  return (dispatch) => {
    // initialized empty users array and push data into it, which is comming from firebase database

    let users = [];
    firebase
      .database()
      .ref("/")
      .child("users")
      .on("child_added", (data) => {
        users.push(data.val());
      });
    dispatch({ type: "GET_USER", payload: users });
  };
};

// export const setData = () => {
//   return {
//     type: "SET_DATA",
//     payload: { name: "akbar", email: "akbar@gmail.com" },
//     payload2: { name: "123", email: "123@gmail.com" },
//   };
// };
