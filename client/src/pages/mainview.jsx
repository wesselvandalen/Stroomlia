import './mainview.css';
import macbookAsset from '../assets/graphics/macbook.png';

export default function Mainview() {

    return (
        <div className="mv-container">

            <div className="mv-section">
                <div className="mv-intro-tekst-container">
                    <h3>MacBook Pro (16-inch, 2021)</h3>
                    <p className='intro-tekst-2'>Opplev ytelse i toppklasse med Apples kraftigste bærbare datamaskin.</p>
                    <p className='intro-tekst-disclaimer'>Produktinformasjon kan endres uten forvarsel, så vi anbefaler at du alltid dobbeltsjekker spesifikasjonene før kjøp.*</p>
                </div>
                <img src={macbookAsset} alt="MacBook Pro (16-inch, 2021) asset." className='mv-intro-graphic'/>
            </div>

            <div className="mv-section">

            </div>
            
        </div>
    );
}