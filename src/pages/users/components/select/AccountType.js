import React from "react";

const AccountType = ({ value, label, name, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select
      value={value}
      name={name}
      class="form-control"
      id="exampleFormControlSelect1"
      onChange={onChange}
    >
      <option value={value} onChange={onChange}>
        Account type
      </option>
      <option value={value} onChange={onChange}>
        Individual
      </option>
      <option value={value} onChange={onChange}>
        Business
      </option>
    </select>
  </div>
);

export default AccountType;
