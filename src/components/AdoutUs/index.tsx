import grozny from "../../img/grozny.jpg";
import CEBI from "../../img/CEBI.jpg"
import styles from "../AdoutUs/aboutUs.module.css"
import empire from "../../img/empire.jpg"
import security from "../../img/security.jpg"


const AboutUs = () => {
  return (
    <div>
      <div className={styles.cebi}>
        <img src={CEBI} alt="" />
      </div>


      <div className={styles.img_about}>
        <img src={grozny} alt="" width={620} height={500}/>
      </div>

      <div className={styles.empire}>
        <img src={empire} alt="" width={660} height={700} />
      </div>

      <div className={styles.secutity}>
        <img src={security} alt="" width={619} height={570}/>
      </div>

      <div className={styles.text_about}>
        Мы являемся официальными представителями от завода производителя Çebi
        Design по северному Кавказу. Работаем уже третий год на рынке с
        торговыми компаниями: ТК "ТАТАЕВ"; ТЦ "ПРОГРЕСС"; ТД "ДАРИАНО"; "Мир
        Дверей"; "Империя Дверей" и многими другими. Дизайнерские ручки от
        ведущего производителя Турции Çebi design это премиальные ручки по
        доступной цене. Отправка по всей России. Наш склад находится в городе Грозном.
      </div>
    </div>
  );
};

export default AboutUs;
