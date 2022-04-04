import React from 'react'

const Adder = (props) => {
    const theFunction = props.theFunction;
  return (
    <div style={{ borderColor: "green", borderWidth: "2px", bordeStyle: "solid" }}
    >Adder
    <button onClick={() => {
        theFunction((curr) =>{return curr +22});
    }}
    >
        Increase count2
    </button>
    </div>
  );
};

export default Adder