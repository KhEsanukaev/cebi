import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoorhandles } from '../../features/doorhandlesSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../Card/card.module.css';

const Card = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const doorhandles = useSelector((state) => 
    state.doorhandles.doorhandles.find((item) => item._id === id));

    useEffect(() => {
        if (!doorhandles) {
            dispatch(fetchDoorhandles());
        }
    }, [dispatch, doorhandles]);

    if (!doorhandles) {
        return <div>Loading...</div>;
    }

    // Настройки для карусели
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
    };

    return (
        <div className={styles.card}>
            <Slider {...settings}>
                {doorhandles.image.map((img, index) => (
                    <div key={index}>
                        <img className={styles.img_card} src={`http://localhost:4000/images/${img}`} alt="Door Handle" />
                    </div>
                ))}
            </Slider>
          
        </div>
    );
}

export default Card;
