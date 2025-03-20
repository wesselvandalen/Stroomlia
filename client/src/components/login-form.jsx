import { useState } from "react";
import './login-form.css';
import googleIcon from '../assets/icons/google.png';
import { signInGoogle, signInEmailAndPassword } from "../service/auth-service";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLoginEmail(e) {
        e.preventDefault();

        try {
            await signInEmailAndPassword(email, password);
            window.location.assign("/");
        }catch (error) {
            console.warn(error);
        }
    }

    async function handleLoginGoogle(e) {
        e.preventDefault();

        try {
            await signInGoogle();
            window.location.asign('/');    
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <div className="login-form-container">

            <form className="login-form" onSubmit={handleLoginEmail}>

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

                <button className="auth-button" type="submit">Logg på</button>

            </form>

            <p className="or-line">ELLER</p>

            <div className="providers-container">
                <button onClick={handleLoginGoogle}>
                    <img src={googleIcon} alt="Google ikon" />
                    Logg på med Google
                </button>
            </div>

        </div>
    );
}