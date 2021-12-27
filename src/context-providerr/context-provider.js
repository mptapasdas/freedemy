import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourseCode, setmodalCourseCode] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const shareCourse = (code) => {
    setmodalCourseCode(code);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalCourseCode,
        shareCourse,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
