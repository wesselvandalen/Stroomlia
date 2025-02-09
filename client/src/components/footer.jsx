import './footer.css';
import logo from '../assets/logo.png';

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-part footer-left">
                    <div className="footer-top">
                        <h3>Noen spørsmål igjen?</h3>
                        <p>
                            Har du fortsatt noe du lurer på? 
                            Vårt team står klare til å hjelpe deg med alt fra produktvalg til levering og retur.
                            Vi svarer så raskt vi kan, enten du kontakter oss via e-post, live chat eller sender et brev med en carrier pigeon (ikke anbefalt, men vi setter pris på innsatsen).
                            Utforsk vår <a className='footer-a' href="/sos">FAQ</a> for raske svar, eller ta direkte kontakt – vi er her for å gjøre handleopplevelsen din så enkel som mulig!</p>
                    </div>
                </div>

                <div className="footer-part footer-bottom">
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
                                    <a href={`/produkter?kategori=mobiltelefoner`}>Mobilertelefoner</a>
                                    <a href={`/produkter?kategori=laptoper`}>Laptoper</a>
                                    <a href={`/produkter?kategori=tvogskjermer`}>TV og skjermer</a>
                                </div>
                                <div className="footer-row">
                                    <a href={`/produkter?kategori=tilbehør`}>Tilbehør</a>
                                    <a href={`/produkter?kategori=smartklokker`}>Smartklokker</a>
                                    <a href={`/produkter?kategori=audio`}>Audio</a>
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
                                    <a href="/vilkår">Vilkår</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}