import loadingImage from '../assets/loading.png';
import "../style/loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingImage} alt="" />
        </div>
    )
}