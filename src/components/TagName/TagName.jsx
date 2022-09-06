import "./TagName.css";
import React from "react";
import { useState } from "react";
function TagName(props) {
  const [num, setNum] = useState(0)
  return (
    <div className="tag-name">
      <h1>{props.name}</h1>
      <p>your number{num}</p>
      <button onClick={() => setNum(num + 3)}>Click to Up</button>
    </div>
  );
};

export default TagName;
