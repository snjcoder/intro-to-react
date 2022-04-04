import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import Displayer from "./components/Displayer";
import Adder from "./components/Adder";

function App(props) {
  const [count, setCount] = useState(4);
  const [count2, setCount2] = useState(4);
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
          <Displayer value={count2}/> 
          <Adder/>   
    </div>
  );
}

export default App;
