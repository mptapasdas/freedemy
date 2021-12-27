import React from "react";
import { useGlobalContext } from "../../context-providerr/context-provider";

import "./modal.css";

let courseList = require("../../courselist.json");

const Modal = () => {
  const { isModalOpen, closeModal, modalCourseCode } = useGlobalContext();

  let shareMessage =
    " Hey checkout the course '" +
    courseList[modalCourseCode].title +
    "' by : " +
    courseList[modalCourseCode].instructor +
    " \n" +
    courseList[modalCourseCode].courseurl;

  const shareViaMail = () => {
    let url = `mailto:?&subject=Check This Course &body=${shareMessage}`;
    window.open(url, "_blank");
  };
  const shareViaWhatsApp = () => {
    let url = `https://api.whatsapp.com/send?phone=&text=${shareMessage}`;
    window.open(url, "_blank");
  };
  const shareViaTelegram = () => {
    let url = `https://telegram.me/share/url?url=${courseList[modalCourseCode].courseurl}&text=${shareMessage}`;
    window.open(url, "_blank");
  };
  const copyShareLink = () => {
    navigator.clipboard.writeText(courseList[modalCourseCode].courseurl);
  };
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}>
      <div className='modal-container'>
        <button className='close-modal-btn' onClick={closeModal}>
          <i className='fas fa-times-circle'></i>
        </button>
        <div className='share-items-container'>
          <p className='share-info'>{shareMessage}</p>
          <button
            type='button'
            className='share-buttons'
            onClick={shareViaMail}>
            <i className='fas fa-envelope mail-icon'></i>
          </button>
          <button
            type='button'
            className='share-buttons '
            onClick={shareViaWhatsApp}>
            <i className='fab fa-whatsapp whatsapp-icon'></i>
          </button>
          <button
            type='button'
            className='share-buttons '
            onClick={shareViaTelegram}>
            <i className='fab fa-telegram telegram-icon'></i>
          </button>
          <button
            type='button'
            className='share-buttons'
            onClick={copyShareLink}>
            <i className='fas fa-clone copy-icon'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;