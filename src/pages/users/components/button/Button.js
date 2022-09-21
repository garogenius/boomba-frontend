import React, {useState} from "react";
import { PropTypes } from "prop-types";

const Button = ({
  value,
  name,
  type,
  contain,
  isLoading = false,
  ...props
}) => {
  return (
    <div className="form-group">
      <button
        {...props}
        className={
          "btn btn-" +
          (type == "success"
            ? "success"
            : type == "error" || type == "danger"
            ? "danger"
            : "primary") +
          (contain ? " btn-block" : "")
        }
      >
        {isLoading ? "" : value}
      </button>
      {/* <input
      type="submit"
      value={value}
      name={name}
      className="btn btn-primary w-100"
    /> */}
    </div>
  );
};

Button.propTypes = {
  //// key is the name of the prop and
  // value is the PropType
  contain: PropTypes.bool,
  isLoading: PropTypes.bool,
};
export default Button;
