import { strokeWidth } from '../config/config';
import { signUserOut } from '../service/auth-service';
import './userprofile.css';

export default function UserProfile(props) {

    function logOut() {
        signUserOut();
    }

    return (
        <div className="up-container">
            <div className="up-content">

                <div className="log-out-btn-container">
                    <button className='log-out-btn' onClick={logOut}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Logg deg ut
                    </button>
                </div>

                <div className="up-top">
                    <img src={props.user.photoURL} alt={props.user.displayName} />
                    <div className='up-top-info'>
                        <h3 className='up-top-name'>{props.user.displayName}</h3>
                        <p className='up-top-email'>{props.user.email}</p>
                    </div>
                </div>

                <div className="up-action-list">
                    <a href="/konto/bestillinger">
                        Bestillinger
                    </a>
                </div>

            </div>
        </div>
    );
}