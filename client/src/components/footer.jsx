import './footer.css';
import logo from '../assets/logo.png';

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-row">
                    <a href="/">
                        <img src={logo} alt="Strømlia logo" className='footer-logo' />
                    </a>
                    <p>Strømlia © 2025</p>
                    <p>Alle rettigheter reservert.</p>
                </div>
                <div className='footer-column'>
                    <div className="footer-row">
                        <h3>Kategorier</h3>
                        <div className="footer-column">
                            <div className="footer-row">
                                <a href="">Mobilertelefoner</a>
                                <a href="">Laptoper</a>
                                <a href="">TV og skjermer</a>
                            </div>
                            <div className="footer-row">
                                <a href="">Tilbehør</a>
                                <a href="">Klokker</a>
                                <a href="">Audio</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-row">
                        <h3>Sider</h3>
                        <div className="footer-column">
                            <div className="footer-row">
                                <a href="/">Hjem</a>
                                <a href="/produkter">Produkter</a>
                                <a href="/omoss">Om oss</a>
                                <a href="/kontakt">Kontakt</a>
                            </div>
                            <div className="footer-row">
                                <a href="/sos">Spørsmål og svar</a>
                                <a href="/handlekurv">Handlekurv</a>
                                <a href="/konto">Konto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}