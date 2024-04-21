
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Card/card.module.css";

type DoorHandle = {
    _id: string;
    image: string[];
    // Добавьте другие необходимые свойства
  };
  
  // Предполагаем, что RootState это интерфейс, хранящий структуру всего стейта приложения
  interface RootState {
    doorhandles: {
      doorhandles: DoorHandle[];
    };
  }


  const Card = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();  // Указываем тип параметра
    const [activeSection, setActiveSection] = useState<string>("features");
  
    const doorhandles = useSelector((state: RootState) =>
      state.doorhandles.doorhandles.find((item) => item._id === id)
    );
  

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
    <>
      <div className={styles.card}>
        <Slider {...settings}>
          {doorhandles.image.map((index) => (
            <div key={index}>
              <img
                className={styles.img_card}
                src={`http://localhost:4000/images/${index}`}
                alt="Door Handle"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.options}>
        <div>
          <ul className={styles.product_head}>
            <li
              className={`${styles.head_li} ${
                activeSection === "features" ? styles.activeButton : ""
              }`}
              onClick={() => setActiveSection("features")}
            >
              Особенности продукта
            </li>
            <li
              className={`${styles.head_li2} ${
                activeSection === "note" ? styles.activeButton : ""
              }`}
              onClick={() => setActiveSection("note")}
            >
              Премичание
            </li>
          </ul>
        </div>
        {activeSection === "features" && (
          <div className={styles.data2}>
            <strong>
              <u>Особенности продукта</u>
            </strong>
            <br />
            <strong>Сырье</strong>
            &nbsp; Замак — это металлический сплав, состоящий в основном из
            цинка, алюминия, магния и меди. Он используется в деталях, где
            требуются прочность, износостойкость и твердость. В качестве сырья
            используется тип цинкового сплава, известный как ZAMAC.&nbsp;
            <strong>Тип покрытия.</strong>
            &nbsp;Нанесены высокопрочные декоративные покрытия.
            Электрофоретическое покрытие
            MP08-MP10-MP11-MP14-MP17-MP19-MP27-MP30-MP32-MP35-MP51
            Гальваническое покрытие MP02-MP19 Красочное покрытие
            PC04-PC05-PC24-PC27-PC35.&nbsp;
            <strong>Толщина покрытия.</strong>
            &nbsp;Наши конструкции приобретают декоративный вид за счет
            сочетания различных типов покрытий, что обеспечивает долгосрочное
            использование.
          </div>
        )}

        {activeSection === "note" && (
          <div className={styles.data}>
            <strong>УСЛОВИЯ УСТАНОВКИ, ОБСЛУЖИВАНИЯ И ГАРАНТИИ</strong>
            <ul>
              <li>
                Изделия должны быть собраны в соответствии с инструкциями по
                установке.
              </li>
              <li>
                Для очистки изделия протирайте поверхность только мягкой тканью,
                смоченной водой. Не применяйте сильные химические вещества и
                полироли.
              </li>
              <li>
                Cebi дает 5 лет гарантии на дефекты производства и материалов
                продукции.
              </li>
              <li>
                Для возврата по гарантии требуется подтверждение покупки.
                Условия, на которые не распространяется гарантия:
              </li>
            </ul>
            <ol>
              <li>
                Неправильное использование или неправильная сборка и
                обслуживание.
              </li>
              <li>
                В случае каких-либо модификаций, ремонт на поверхности изделия.
              </li>
              <li>Неподходящее хранение</li>
              <li>
                Воздействие на поверхность изделия острых и абразивных
                инструментов и агрессивных химикатов.
              </li>
              <li>
                Для внесения изменений или ремонта на поверхность изделия.
              </li>
              <li>
                Воздействие на поверхность острых инструментов и агрессивных
                химикатов.
              </li>
            </ol>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
