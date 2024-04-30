import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../img/photo1.jpg";
import photo2 from "../../img/photo2.jpg";
import photo3 from "../../img/photo3.jpg";
import photo4 from "../../img/photo4.jpg";
import styles from "./slider.module.css";

interface PhotoSliderProps {}

const PhotoSlider: React.FC<PhotoSliderProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
