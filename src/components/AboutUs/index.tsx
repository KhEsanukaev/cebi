import React from "react";
import styles from "../AboutUs/aboutUs.module.css";
import CEBI from "../../img/CEBI.jpg";
import grozny from "../../img/grozny.jpg";
import empire from "../../img/empire.jpg";
import security from "../../img/security.jpg";
import empiredoorplate from "../../img/empiredoorplate.jpg";
import zipline from "../../img/zipline.jpg";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className={styles.cebi}>
        <img src={CEBI} alt="" />
      </div>

      <div className={styles.img_about}>
        <img src={grozny} alt="" width={750} height={500} />
      </div>

      <div className={styles.empire}>
        <img src={empire} alt="" width={753} height={700} />
      </div>

      <div className={styles.secutity}>
        <img src={security} alt="" width={750} height={470} />
      </div>

      <div className={styles.empiredoorplate}>
        <img src={empiredoorplate} alt="" width={752} height={500} />
      </div>

      <div className={styles.zipline}>
        <img src={zipline} alt="" width={750} height={760} />
      </div>

      <div className={styles.text_about}>
        Мы являемся официальными представителями от завода производителя Çebi
        Design по северному Кавказу. Работаем уже третий год на рынке с
        торговыми компаниями: ТК "ТАТАЕВ"; ТЦ "ПРОГРЕСС"; ТД "ДАРИАНО"; "Мир
        Дверей"; "Империя Дверей" и многими другими. Дизайнерские ручки от
        ведущего производителя Турции Çebi design это премиальные ручки по
        доступной цене. Наш склад находится в городе Грозном.
      </div>
    </div>
  );
};

export default AboutUs;