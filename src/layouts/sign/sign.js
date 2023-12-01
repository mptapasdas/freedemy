import React from "react";

import { useGlobalContext } from "../../context-provider/context-provider";
import { useAuthContext } from "../../context-provider/auth-provider";
import CustomModal from "../../components/custom-modal/CustomModal";

import Operations from "./operations";
import Profile from "./profile";

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
