import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {
  const { value, hasError, label, type, errorText, onChangeHandler } = props;
  const inputClass = hasError ? "custom-input error-input" : "custom-input";

  return (
    <div className="mt-3">
      <input
        type={type || "text"}
        id="customInput"
        className={inputClass}
        placeholder={label}
        value={value}
        onChange={onChangeHandler}
      />
      {hasError && <p className="error-message">{errorText}</p>}
    </div>
  );
};

export default CustomInput;
