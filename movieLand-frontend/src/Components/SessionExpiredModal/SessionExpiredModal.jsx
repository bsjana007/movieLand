import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SessionExpiredModal.css';

const SessionExpiredModal = ({ setSessionExpired }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setSessionExpired(false);
        navigate("/login");
    };

    return (
        <div className="session-modal-overlay">
            <div className="session-modal-content">
                <div className="session-modal-icon-wrapper">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h2>OOPS! Session Expired.</h2>
                <p>For your security, we've logged you out. Please log in again to continue enjoying your movies.</p>
                <button className="session-modal-btn" onClick={handleLoginClick}>
                    Log In Again <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default SessionExpiredModal;
