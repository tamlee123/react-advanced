import React, { useState, Fragment } from "react";

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState("");

  return (
    <Fragment>
      //add input state variable, .target.value is for updating state variable
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
