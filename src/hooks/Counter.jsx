import React, { useState, Fragment } from "react";
import { useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //add input state variable, .target.value is for updating state variable

  useEffect(() => {
    document.title = `${name} has clicked ${count} time`;
  });
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
