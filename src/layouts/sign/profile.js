import React from "react";
import { useAuthContext } from "../../context-providerr/auth-provider";
import authorized from "../../assets/authorized.png";

const Profile = () => {
    const { user, logout, authLoading, setOperation } = useAuthContext();

    const logoutHandler = () => {
        if (!authLoading) {
            setOperation("login");
            logout();
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='d-none d-md-block col-md-6'>
                    <img
                        src={authorized}
                        alt='authorized'
                        className='authorized'
                    />
                </div>
                <div className='col-12 col-md-6'>
                    <h2>
                        Hey <span className='user-name'>{user.name}</span>
                    </h2>
                    <p className='user-para'>{`You can logout by \n clicking below button`}</p>
                    <button
                        className='operation-button'
                        onClick={() => logoutHandler()}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
