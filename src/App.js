// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import { NavBar } from "./NavBar";
import Displayer from "./components/Displayer";
import Adder from "./components/Adder";

function App(props) {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(6);
  return (
    <div>
      <h1>Hello C8!{count}</h1>
      <button
      onClick={() => {
        setCount(count +1)
        setCount((curr) => {return curr +1});
      }}
        >
          PLUS ONE
          </button> 
          <pre>
          <Displayer value={count2}/> 

          </pre>
          <Adder theFuction={setCount2}/>   
    </div>
  );
}

export default App;
