/* eslint-disable react/prop-types */
import loadingImage from '../assets/image/loading.png';
import BouncingDotsLoader from './bouncing-dots-loader';
import "../style/loading.css";


export default function Loading({ isLoading }) {
    return (
        <div className={`loading ${isLoading ? 'overlay' : ''}`}>
            <img src={loadingImage} alt="" />
            <BouncingDotsLoader />
        </div>
    )
}