import styles from "../Contacts/contacts.module.css";
import cont1 from "../../img/cont1.png";
import cont2 from "../../img/cont2.png";
import cont3 from "../../img/cont3.png";
import cont4 from "../../img/cont4.png";

const Contacts = ({ showMap = true }) => {
  return (
    <>
    <div className={styles.contacts}>
      <div className={styles.number}>
        <img src={cont1} alt="" />
        <span>+79899309981</span>
      </div>

      <div className={styles.contacts2}>
        <div>
          <img src={cont2} alt="" />
        </div>
        <div className={styles.media}>
          <span>goldtrader95@mail.ru</span>
          <a className={styles.text_a} href="https://www.instagram.com/cebi_sanoy?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==">
            instagram:@cebi_sanoy
          </a>
        </div>
      </div>

      <div className={styles.adress}>
        <div className={styles.img}>
          <img src={cont3} alt="" />
        </div>
        <div>
          <span>
            ул. Маяковского, 113, Грозный, Чеченская Респ., 364068. Торговый
            центр "ПРОГРЕСС".
          </span>

          <span>
            ул. Маяковского, 69, Грозный, Чеченская Респ., 364068. Дариано
            Двери.
          </span>
        </div>
      </div>

      <div className={styles.rest}>
        <div>
          <img src={cont4} alt="" />
        </div>
        <div>
          <span> с 9-00 до 19-00 Пятница-выходной.</span>
        </div>
      </div>

    
    </div>
    <div>
  {showMap && (
        <div className={styles.map}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A440281370c261035038bb80c935ab956d9c2bb3c6c06e05628e52a7533f01c16&amp;source=constructor" width="946" height="625" frameBorder="0"></iframe>
        </div>
      )}
    </div></>
    
  );
};

export default Contacts;
