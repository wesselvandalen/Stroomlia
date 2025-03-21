import { useState } from "react";
import { signUpEmailAndPassword, registerWithGoogle } from '../service/auth-service';
import './register-form.css';
import googleIcon from '../assets/icons/google.png';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [permission, setPermission] = useState(false);

    function handleRegister(e) {
        e.preventDefault();

        if (!permission) {
            window.alert('Du må akseptere vilkårene.');
            return;
        }

        signUpEmailAndPassword(email, password)
            .then(() => {
                window.location.assign('/');
            })
            .catch((error) => {
                console.warn(error);
            })
    }

    const handleGoogleRegister = async (e) => {
        e.preventDefault();

        if (!permission) {
            window.alert('Du må akseptere vilkårene.');
            return;
        }

        try {
            await registerWithGoogle();
        } catch (error) {
            console.warn(error);
        }
    };

    const handlePermissionChange = () => setPermission(!permission);

    return (
        <div className="register-form-container">

            <form className="register-form" onSubmit={handleRegister}>

                <input
                    className="input-text"
                    type="email"
                    name="email"
                    placeholder='E-post'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password"
                    className="input-text"
                    name="password"
                    placeholder='Passord'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="terms-container">
                    <input type="checkbox" className="input-checkbox" onChange={handlePermissionChange} />
                    <span>Ved å registrere deg bekrefter du at du har lest og akseptert <a className="terms-a" href="/vilkår" target="_blank">våre vilkår og betingelser</a>.</span>
                </div>

                <button className="auth-button" type="submit">Registrer deg</button>

            </form>

            <p className="or-line">ELLER</p>

            <div className="providers-container">
                <button onClick={handleGoogleRegister}>
                    <img src={googleIcon} alt="Google ikon" />
                    Registrer deg med Google
                </button>
            </div>

        </div>
    );
}