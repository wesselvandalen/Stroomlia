import './notfoundview.css';
import error404GIF from '../assets/utils/error404.gif';

export default function NotFoundView() {


    return (
        <div className="error-container">
            <img src={error404GIF} alt="Feilmelding 404 ikke funnet GIF" />
            <h3>404 Ikke funnet</h3>
            <p>Det du leter etter finnes ihvertfall ikke her (eller ikke noe mer)...</p>
        </div>
    )
}