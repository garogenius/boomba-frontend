import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
