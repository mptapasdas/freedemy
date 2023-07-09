import React from "react";
import SwaggerUI from "swagger-ui-react";
import "./swaggerui.css"

const SWAGGER = () => (
    <SwaggerUI url='https://freedemy.azurewebsites.net/swagger.json' />
);
export default SWAGGER;