import React, { useState, useContext } from "react";
import {
  getFavouriteCourseCodeListFromLocalStorage,
  removeElementFromArray,
} from "../functions/functions";

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
  const isFavourite = (code) => {
    let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
    const index = favouriteCourseCodeList.indexOf(code);
    return index > -1;
  };
  const handleLike = (code) => {
    let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
    favouriteCourseCodeList.push(code);
    favouriteCourseCodeList = [...new Set(favouriteCourseCodeList)];
    localStorage.setItem(
      "favouriteCourseCodes",
      JSON.stringify(favouriteCourseCodeList)
    );
  };
  const handleUnlike = (code) => {
    let favouriteCourseCodeList = getFavouriteCourseCodeListFromLocalStorage();
    removeElementFromArray(code, favouriteCourseCodeList);
    localStorage.setItem(
      "favouriteCourseCodes",
      JSON.stringify(favouriteCourseCodeList)
    );
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalCourseCode,
        shareCourse,
        handleLike,
        handleUnlike,
        isFavourite,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
