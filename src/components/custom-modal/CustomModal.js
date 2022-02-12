import React from "react";

import "./CustomModal.css";

const CustomModal = (props) => {
    const { children, isModalOpen, closeModal } = props;
    return (
        <div
            className={`${
                isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }`}>
            <div className='modal-container p-md-1 p-lg-3 mt-3'>
                <button className='close-modal-btn' onClick={closeModal}>
                    <i className='fas fa-times-circle'></i>
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
