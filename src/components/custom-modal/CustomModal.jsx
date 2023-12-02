import React from "react";

import "./CustomModal.css";

const CustomModal = (props) => {
    const { children, isModalOpen, closeModal } = props;
    return (
        <div
            className={`${
                isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }`}>
            <div className='modal-container p-md-3 p-lg-3 mt-5'>
                <button
                    className='close-modal-btn p-1 d-flex flex-row justify-content-center'
                    onClick={closeModal}>
                    <i className='fas fa-times-circle'></i>
                </button>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;
