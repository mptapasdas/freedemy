import React from "react";
import "./CardHolder.css";

const CardHolder = ({ children }) => {
  return (
    <div className='bg-container container-fluid' id='style-2'>
      <div className='row row-container'>{children}</div>
    </div>
  );
};

export default CardHolder;
