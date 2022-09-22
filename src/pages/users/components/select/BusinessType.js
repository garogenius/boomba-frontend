import React, { useState, useEffect } from "react";
import { userService } from "../../../../Service/user.Service";
// const [businessType, setBusinessType] = useState([]);
// useEffect(() => {});
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
