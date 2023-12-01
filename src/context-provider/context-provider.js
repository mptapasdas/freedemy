import React, { useState, useContext } from "react";
// import { useAuthContext } from "./auth-provider";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //share modal
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [sharingCourse, setSharingCourse] = useState(0);

    //login/logout modal
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);

    //courses
    const [courseArray, setCourseArray] = useState([]);

    const [allCoursesLoading, setAllCoursesLoading] = useState(true);

    const [page, setPage] = useState("home");

    const openShareModal = () => {
        setIsShareModalOpen(true);
    };

    const openSignModal = () => {
        setIsSignModalOpen(true);
    };

    const closeShareModal = () => {
        setIsShareModalOpen(false);
    };

    const closeSignModal = () => {
        setIsSignModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isShareModalOpen,
                openShareModal,
                closeShareModal,
                isSignModalOpen,
                openSignModal,
                closeSignModal,
                sharingCourse,
                setSharingCourse,
                courseArray,
                setCourseArray,
                allCoursesLoading,
                setAllCoursesLoading,
                page,
                setPage,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
