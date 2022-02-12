import React from "react";

import { useGlobalContext } from "../../context-providerr/context-provider";
import { useAuthContext } from "../../context-providerr/auth-provider";
import CustomModal from "../../components/custom-modal/CustomModal";

import Operations from "./operations";
import Profile from "./profile";

import "./sign.css";

const Sign = () => {
    const { isSignModalOpen, closeSignModal } = useGlobalContext();
    const { user, isLoggedIn } = useAuthContext();
    console.log(user, "triggered from sign");

    return (
        <CustomModal isModalOpen={isSignModalOpen} closeModal={closeSignModal}>
            {!isLoggedIn ? <Operations /> : <Profile />}
        </CustomModal>
    );
};

export default Sign;
