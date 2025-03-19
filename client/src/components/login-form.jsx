import { useState } from "react";
import './login-form.css';
import googleIcon from '../assets/icons/google.png';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginEmail(e) {
        e.preventDefault();

       
    }

    const handleLoginGoogle = async (e) => {
        e.preventDefault();

      
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
                <button>
                    <img src={googleIcon} alt="Google ikon" />
                    Registrer deg med Google
                </button>
            </div>

        </div>
    );
}