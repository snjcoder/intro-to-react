import React from "react";

const Displayer = (props) => {
  const myData = props.value;
  return (
    <div
      style={{ borderColor: "blue", borderWidth: "2px", bordeStyle: "solid" }}
    >
      My data is: {myData}
    </div>
  );
};

export default Displayer;
