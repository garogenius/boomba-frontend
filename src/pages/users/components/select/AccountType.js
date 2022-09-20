import React from "react";

const AccountType = ({ value, label, name, placeholder, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select
      value={value}
      name={name}
      className="form-control"
      onChange={onChange}
    >
      <option value={value} onChange={onChange}>
        Account type
      </option>
    </select>
  </div>
);

export default AccountType;
