import { useDispatch } from "react-redux";
import styles from '../DoorhandlesCard/doorhandles.module.css'
import { Link } from "react-router-dom";

const DoorhandlesCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    // Оберните весь возвращаемый JSX в Link, чтобы сделать весь компонент кликабельным
    <Link to={`/card/${item._id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div>
          <img className={styles.img} src={`http://localhost:4000/images/${item?.image[0]}`} alt={item?.name} />
        </div>
        <div>{item?.categoryId?.name}</div>
        <div className={styles.desc}>{item?.description}</div>
        <div className={styles.name}>{item?.name}</div>
        <div className={styles.price}>{item?.price}<div className={styles.rub}>руб</div></div>
      </div>
    </Link>
  );
};

export default DoorhandlesCard;
