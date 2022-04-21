import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const handler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="search"
          value={search}
          name="search"
          onChange={handler}
        />
        <br />
        {search}
      </center>
    </div>
  );
};

export default App;
