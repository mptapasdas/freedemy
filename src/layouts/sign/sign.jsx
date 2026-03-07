import React from "react";

import { useGlobalContext } from "../../context-provider/context-provider.jsx";
import { useAuthContext } from "../../context-provider/auth-provider.jsx";
import CustomModal from "../../components/custom-modal/CustomModal.jsx";

import Operations from "./operations.jsx";
import Profile from "./profile.jsx";

import "./sign.css";

const Sign = () => {
    const { isSignModalOpen, closeSignModal } = useGlobalContext();
    const { isLoggedIn } = useAuthContext();

    return (
        <CustomModal isModalOpen={isSignModalOpen} closeModal={closeSignModal}>
            {!isLoggedIn ? <Operations /> : <Profile />}
        </CustomModal>
    );
};

export default Sign;
