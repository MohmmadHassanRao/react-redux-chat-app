import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { facebook_login } from "../store/Action";
import "./Home.css";

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(facebook_login(history))}>
        Facebook Login
      </button>
    </div>
  );
};

export default Home;
