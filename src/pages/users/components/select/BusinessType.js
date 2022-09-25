import React from "react";
// const [businessType, setBusinessType] = useState([]);
// useEffect(() => {});
const BusinessType = ({ label, children, ...props }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <select {...props} class="form-control" id="exampleFormControlSelect1">
      {children}
    </select>
  </div>
);
export default BusinessType;
