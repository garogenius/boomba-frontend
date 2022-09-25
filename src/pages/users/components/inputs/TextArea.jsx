import React, { useState } from "react";

const TextArea = ({ label, value, myCHange, ...props }) => {
  const [changeVal, setChangeVal] = useState("");
  let handleChange = (cChange) => {
    myCHange = cChange;
  };
  return (
    <div className="form-group">
      {label && <label for="comment">{label}</label>}
      <textarea
        class="form-control"
        id="comment"
        rows="5"
        value={changeVal}
        onChange={handleChange(myCHange)}
        {...props}
      ></textarea>
      {/* <input
        className="form-control"
        // value={changeVal}
        // style={{border:value!=""?"1px solid blue":"1px solid red"}}
        onChange={handleChange(myCHange)}
        {...props}
      /> */}
    </div>
  );
};

export default TextArea;
