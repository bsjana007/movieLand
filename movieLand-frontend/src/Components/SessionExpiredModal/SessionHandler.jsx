import React, { useContext } from "react";
import MovieContext from "../../context/movieContext";
import SessionExpiredModal from "./SessionExpiredModal";

const SessionHandler = () => {
    const { isSessionExpired, setSessionExpired } = useContext(MovieContext);

    if (!isSessionExpired) return null;

    return <SessionExpiredModal setSessionExpired={setSessionExpired} />;
};

export default SessionHandler;
