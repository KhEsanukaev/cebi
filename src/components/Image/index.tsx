import React from "react";
import photo5 from "../../img/photo5.jpg";
import styles from "../Image/image.module.css";

const Image: React.FC = () => {
  return (
    <div className={styles.image_box}>
      <img className={styles.image_last} src={photo5} alt="" />
    </div>
  );
};

export default Image;