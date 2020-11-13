import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import AppRouter from "./config/router";
// import { setData } from "./store/Action";

function App() {
  // const user = useSelector((state) => state.users);
  // console.log(user);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch(setData())}>ADD USER</button> */}
      <AppRouter />
    </div>
  );
}

export default App;
