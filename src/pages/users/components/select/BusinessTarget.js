import React from "react";

const BusinessTarget = ({
  value,
  label,
  name,
  onChange,
  children,
  option,
  ...props
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor="input-field">
        {label}
        <p
          className="text-xs text-danger"
          style={{ marginTop: "-23px", marginLeft: "50px" }}
        >
          {option}
        </p>
      </label>
    )}
    <select {...props} class="form-control" id="exampleFormControlSelect1">
      {children}
    </select>
  </div>
);
export default BusinessTarget;
