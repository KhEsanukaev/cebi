
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импорт изображений
import photo1 from "../../img/photo1.jpg";
import photo2 from "../../img/photo2.jpg";
import photo3 from "../../img/photo3.jpg";
import photo4 from "../../img/photo4.jpg";

// Компоненты для кастомных стрелок
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const PhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const photos = [photo1, photo2, photo3, photo4];

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt={`Slide ${index + 1}`} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
        </div>
      ))}
    </Slider>
  );
}

export default PhotoSlider;

