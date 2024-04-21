import cebilogo from "../../img/cebilogo.jpg";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";

const Header = ({ searchQuery, setSearchQuery }) => {
  const dispatch = useDispatch();
  const doorhandles = useSelector((state) => state.doorhandles.doorhandles);

  useEffect(() => {
    dispatch(fetchDoorhandles());
  }, [dispatch]);

  const filteredDoorhandles = doorhandles.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <img src={cebilogo} alt="Логотип" width={70} height={70} />
          </Link>
        </div>

        <ul className={styles.cont_ul}>
          <li>
            <Link to={`/`} className={styles.mainLink}>
              ГЛАВНАЯ
            </Link>
          </li>
          <li>
            <Link to={"/aboutus"} className={styles.aboutLink}>
              О НАС
            </Link>
          </li>
          <li>
            <Link to={"/contacts"} className={styles.contactLink}>
              КОНТАКТЫ
            </Link>
          </li>
          <li>
            <Link to={"/upload"} className={styles.uploadLink}>
              ДЛЯ СКАЧИВАНИЯ
            </Link>
          </li>
        </ul>
        <div >
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Поиск продукции..."
            className={styles.inp}
          />
        </div>
        <div className={styles.call}>
          <span>+79899309981</span>
          <span>goldtrader95@mail.ru</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
