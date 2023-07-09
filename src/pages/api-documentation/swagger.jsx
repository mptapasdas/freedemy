import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./swaggerui.css"

const SWAGGER = () => (
    <SwaggerUI url='https://freedemy.azurewebsites.net/swagger.json' />
);
export default SWAGGER;