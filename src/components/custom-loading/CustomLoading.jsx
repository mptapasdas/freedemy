import React from "react";
import "./CustomLoading.css";

const CustomLoading = (props) => {
    const { isLoading } = props;
    return (
        isLoading && (
            <div className='d-flex flex-row justify-content-center d-block w-100 mb-3'>
                <div className='loader'></div>
            </div>
        )
    );
};

export default CustomLoading;
