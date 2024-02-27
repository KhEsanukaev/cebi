import cebilogo from "../../img/cebilogo.jpg";
import styles from "../Upload/upload.module.css";
import Contacts from "../Contacts";

const Upload = () => {
  return (
    <div className={styles.upload}>
      <div>
        <div>
          <h2 className={styles.h2_catalog}>Каталог</h2>
        </div>
        <div>
          <img src={cebilogo} alt="Логотип" width={200} height={200} />
        </div>
        <div className={styles.link}>
          <h2>
            <a href="https://drive.google.com/file/d/1wsIGHuZoMzRwsI9EynMmOKLra-8GRSaw/view">
              Скачать каталог дверных ручек
            </a>
          </h2>
        </div>
        <div className={styles.link2}>
          <h2>
            <a href="https://drive.google.com/file/d/1z-0UdRm8HhVsil6UMljk0kMZnQZtEWqu/view">
              Инструкция по установке дверных ручек
            </a>
          </h2>
        </div>
      </div>
      <div>
        <Contacts showMap={false} />
      </div>
    </div>
  );
};

export default Upload;
