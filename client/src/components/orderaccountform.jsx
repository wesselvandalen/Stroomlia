import { strokeWidth } from '../config/config';
import './orderaccountform.css';

export default function OrderAccountForm({ onContinueAsGuest }) {

    const handleContinueAsGuestButton = () => onContinueAsGuest();
    const handleLogInPageButton = () => window.location.assign('/konto');

    return (
        <div className="oaf-container">

            <button onClick={handleContinueAsGuestButton}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L22 18M22 18L19 15M22 18H16M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Fortsett som gjest
            </button>

            <p>ELLER</p>

            <button onClick={handleLogInPageButton}>
                Gå til påloggingssiden
            </button>

        </div>
    )
}