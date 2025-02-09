import './loading-screen.css';
import loadingGIF from '../assets/utils/loading.gif';

export default function LoadingScreen({ message }) {
    return (
        <div className="loading-products">
            <img src={loadingGIF} alt="Lader GIF" />
            <p>{message}</p>
        </div>
    )
}