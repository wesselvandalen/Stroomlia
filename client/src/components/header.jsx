import './header.css';
import logo from '../assets/logo.png';

export default function Header() {


    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-left">
                    <a href="/">
                        <img className='header-logo' src={logo} alt="Strømlia logo" />
                    </a>
                    <div className="header-links">
                        <a href="/">Hjem</a>
                        <a href="">Om oss</a>
                        <a href="">Produkter</a>
                    </div>
                </div>
                <div className="header-right">
                    <p>Konto</p>
                </div>
            </div>
        </div>
    );
}