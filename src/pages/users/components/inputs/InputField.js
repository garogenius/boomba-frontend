import React from "react";

const InputField = ({ label, value, myCHange, option, ...props }) => {
  // const [changeVal, setChangeVal] = useState("");
  let handleChange = (cChange) => {
    myCHange = cChange;
  };
  return (
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
      {/* {option && (
        
      )} */}
      <input
        className="form-control"
        // value={changeVal}
        // style={{border:value!=""?"1px solid blue":"1px solid red"}}
        onChange={handleChange(myCHange)}
        {...props}
      />
    </div>
  );
};

export default InputField;

// const InputField = ({ label, name, type, onChange, ...props }) => {

//   const [enb, setEnb] = useState(false);

//   let handleChange = (onChange) => {
//     return onChange
//     setEnb(false);
//   };

//   return(
//   <div className="form-group">
//     {label && <label htmlFor="input-field">{label}</label>}
//     <input {...props} type={type} className="form-control" onChange={onChange} style={{border:"1px solid red"}} />
//   </div>
// );}

// export default InputField;
