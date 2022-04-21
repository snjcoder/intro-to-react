import React from 'react'

function App() {
const arr = ["cat","bat","mat","sat","pat","fat",]
  return (
    <div>
     {
         arr.map(
             (value,index) => <li>{value}</li>
         )
     }
    </div>
)
}
 

export default App;
