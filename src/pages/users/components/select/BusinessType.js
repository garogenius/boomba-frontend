import React from "react";

const BusinessType = ({ value, label, name, onChange }) => (
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
        Business type
      </option>
    </select>
  </div>
);
export default BusinessType;
