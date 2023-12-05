import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {
  const { value, label, mandatory, type, rows, onChangeHandler } = props;
  return (
    <div className="mt-3 inputBox">
      <input
        type={type || "text"}
        id="customInput"
        value={value}
        onChange={onChangeHandler}
        required="required"
        rows={rows || 1}
      />
      <span>{`${label}${mandatory ? "*" : ""}`}</span>
    </div>
  );
};

export default CustomInput;
