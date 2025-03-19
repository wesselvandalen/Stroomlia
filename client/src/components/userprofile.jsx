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

            </div>
        </div>
    );
}