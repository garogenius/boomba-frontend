import React, { useState } from "react";

const FileInput = ({ label, value, myCHange, ...props }) => {
  const [changeVal, setChangeVal] = useState("");
  let handleChange = (cChange) => {
    myCHange = cChange;
  };
  return (
    <div className="form-group">
      {label && <label for="exampleFormControlFile1">{label}</label>}
      <input
        class="form-control-file"
        id="exampleFormControlFile1"
        onChange={handleChange(myCHange)}
        {...props}
      />
    </div>
  );
};

export default FileInput;
