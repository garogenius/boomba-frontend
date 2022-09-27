import React from "react";

const Select = ({ value, label, name, onChange, children, ...props }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select {...props} class="form-control" id="exampleFormControlSelect1">
      {children}
    </select>
  </div>
);
export default Select;
