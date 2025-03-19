import './special-message.css';
import emoji from '../assets/utils/heart.png';

export default function SpecialMessage() {
    return (
        <div className="sm-container">
            <div className="sm-content">
                <p>
                    <span className='sm1'>Livet er bedre når man deler med hverandre!</span>
                    <span className='sm2'> Bruk koden VENN for 5% rabatt!</span>
                </p>
                <img src={emoji} alt="Hjerte emoji" />
            </div>
        </div>
    );
}