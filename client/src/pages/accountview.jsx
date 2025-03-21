import './accountview.css';
import RegisterForm from '../components/register-form';
import Footer from '../components/footer';
import LoginForm from '../components/login-form';
import { useContext, useState } from 'react';
import { strokeWidth } from '../config/config';
import { AuthContext } from '../contexts/authcontext';
import UserProfile from '../components/userprofile';

export default function AccountView() {
    const [registerView, setRegisterView] = useState(false);
    const { user, loading } = useContext(AuthContext);

    const handleRegisterViewSwitch = () => setRegisterView(!registerView);

    return (
        <div className="ac-container">
            <div className="ac-content">

                {user ?
                    null
                    :
                    <div className="bag-info-container">
                        <div>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h2>{registerView ? 'Lag en konto' : 'Logg deg på'}</h2>
                        </div>
                        <p>Bli en del av vår smarte verden – {registerView ? 'registrer deg nå!' : 'logg på nå!'}</p>
                        <p className="">{registerView ? 'Har du allerede konto?' : 'Har du ikke konto ennå?'} <span className="terms-a" onClick={handleRegisterViewSwitch} >{registerView ? 'Logg deg på' : 'Registrer deg'}</span></p>
                    </div>
                }

                {user ?
                    <UserProfile
                        key={1}
                        user={user}
                    />
                    :
                    <>
                        {registerView ?
                            <RegisterForm />
                            :
                            <LoginForm />
                        }
                    </>
                }

            </div>
            {/* <Footer /> */}

        </div>
    );
}