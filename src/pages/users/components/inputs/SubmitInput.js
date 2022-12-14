import React from "react";

const SubmitInput = ({ value, name }) => (
  <div className="form-group">
    <input
      type="submit"
      value={value}
      name={name}
      className="btn btn-primary w-100"
    />
  </div>
);

export default SubmitInput;
