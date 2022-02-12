import React from "react";
import TextField from "@mui/material/TextField";
import "./CustomInput.css";

const CustomInput = (props) => {
    const { value, hasError, label, type, errorText, onChangeHandler } = props;
    return (
        <TextField
            sx={{ input: { color: "white" } }}
            InputLabelProps={{
                style: {
                    color: "#91c7ba",
                    fontSize: "0.8rem",
                },
            }}
            className='input-text mt-3'
            type={type || "text"}
            value={value}
            error={hasError}
            label={label ? label : "label"}
            helperText={errorText}
            onChange={onChangeHandler}
            variant='standard'
        />
    );
};

export default CustomInput;
