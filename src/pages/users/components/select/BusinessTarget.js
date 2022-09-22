import React from "react";

const BusinessTarget = ({ value, label, name, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select
      value={value}
      name={name}
      class="form-control"
      id="exampleFormControlSelect1"
      onChange={onChange}
    >
      <option value="" onChange={onChange}>
        Business type
      </option>
      <option value="" onChange={onChange}>
        Product
      </option>
      <option value="" onChange={onChange}>
        Services
      </option>
    </select>
  </div>
);
export default BusinessTarget;
