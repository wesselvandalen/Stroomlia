import React, {useEffect} from "react";
import './notification.css';

const Notification = ({ message, onClose }) => {

    useEffect(() => {
        const timeInSeconds = 4000;
        const timer = setTimeout(onClose, timeInSeconds);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification-popup">
            {message}
        </div>
    );
};

export default Notification;