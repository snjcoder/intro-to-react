import React from "react";
import FormInput from "./components/forminput/formInput.css";

const App = () => {
  return (
    <div className="app">
      <form>
        <FormInput  place/>
        <FormInput />
        <FormInput />
        <FormInput />
      </form>
    </div>
  );
};

export default App;
