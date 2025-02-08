import loadingImage from '../assets/loading.png';
import BouncingDotsLoader from './bouncing-dots-loader';
import "../style/loading.css";


export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingImage} alt="" />
            <BouncingDotsLoader />
        </div>
    )
}