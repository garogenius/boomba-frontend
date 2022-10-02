import React from "react";

const AccountType = ({
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
          className="text-xs text-danger float-right"
          style={{ marginTop: "-5px" }}
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

export default AccountType;
