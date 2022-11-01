import React, { Component } from "react";
import PropTypes from "prop-types";

import "./swaggerui.css";

import SwaggerUi, { presets } from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

class SwaggerUI extends Component {
    componentDidMount() {
        SwaggerUi({
            dom_id: "#swaggerContainer",
            url: this.props.url,
            spec: this.props.spec,
            presets: [presets.apis],
        });
    }

    render() {
        return (
            <div className='doc-wrapper d-none d-md-block'>
                <div className='heading-container'>
                    <h1 className='heading'>Freedemy API</h1>
                </div>
                <div
                    id='swaggerContainer'
                    className='documentation-container'
                />
            </div>
        );
    }
}

SwaggerUI.propTypes = {
    url: PropTypes.string,
    spec: PropTypes.object,
};

https: SwaggerUI.defaultProps = {
    url: "https://freedemy.up.railway.app/swagger.json"
};

export default SwaggerUI;
