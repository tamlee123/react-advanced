import React, { useState, Fragment } from "react";
import { useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //add input state variable, .target.value is for updating state variable

  //componentDidMount()
  //componentUpdate()
  //componentWillUnmount() for where we write clean up code
  useEffect(() => {
    document.title = `${name} has clicked ${count} time`;
    return () => {
      //whenever we increase or change the name, we see clean up message
      console.log("clean up ");
    };
  }, []); // pass a dependency array to preventing clean up message everytime we click
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
