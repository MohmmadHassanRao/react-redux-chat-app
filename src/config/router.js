import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../containers/Chat";
import Home from "../containers/Home";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default AppRouter;
