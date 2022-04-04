import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { NavBar } from "./NavBar";

function App(props) {
  const [count, setCount] = useState(4);
  return (
    <div>
      <h1>Hello C8!{count}</h1>
      <button
      onClick={() => {
        setCount((curr) => {return curr +1});
      }}
        >
          PLUS ONE
          </button>     
    </div>
  );
}

export default App;
