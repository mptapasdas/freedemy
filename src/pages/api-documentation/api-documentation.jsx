import React, { useEffect } from "react";
// import SwaggerUI from "./swaggerui";
import SWAGGER from "./swagger";
import "./api-documentation.css";

const ApiDoc = () => {
    useEffect(() => {
        document.title = "Freedemy | API";
    });
    return (
        <div className='h-100'>
            <div className='api-container col-12'>
                <SWAGGER />
            </div>
        </div>
    );
};

export default ApiDoc;
