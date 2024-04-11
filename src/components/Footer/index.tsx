import React, { useRef } from "react";
import emailjs from "emailjs-com";
import cebilogo from "../../img/cebilogo.jpg";
import telegram from "../../img/telegtam.png";
import whatsapp1 from "../../img/whatsapp1.png";
import instagram from "../../img/instagram.png";
import styles from "../Footer/footer.module.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!form.current) {
      console.error("Форма не найдена");
      return;
    }

    emailjs.sendForm('service_lzsjxdk', 'template_6wqe2rb', form.current, 'cbQQesMDO2TU2XRKx')
      .then((result) => {
        console.log(result.text);
        // Здесь можно добавить уведомление об успешной отправке
      }, (error) => {
        console.log(error.text);
        // Здесь можно обработать ошибку отправки
      });
  };
  

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.logo}>
            <img src={cebilogo} alt="" width={100} height={100} />
          </div>
          <span className={styles.span}>
            Чеченская Республика г.Грозный ул.Аральская
          </span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.hh}>
            <h2>Написать нам</h2>
          </div>
         
          <textarea className={styles.inp} name="message" placeholder="Сообщение" required></textarea>
          <button type="submit" className={styles.btn}>
            Отправить
          </button>
        </form>
      </div>
      <div>
        <div className={styles.media}>
          <a
            target="_blank"
            href="https://www.instagram.com/cebi_sanoy?igsh=OGQ5ZDc2ODk2ZA=="
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" width={50} height={50}></img>
          </a>
          <a target="_blank" href="https://t.me/+79899309981" rel="noopener noreferrer">
            <img
              className={styles.telegram}
              src={telegram}
              alt=""
              width={50}
              height={50}
            ></img>
          </a>
          <a target="_blank" href="https://wa.me/89899309981" rel="noopener noreferrer">
            <img
              className={styles.whatsapp}
              src={whatsapp1}
              alt=""
              width={50}
              height={50}
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
