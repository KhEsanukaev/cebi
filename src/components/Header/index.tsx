import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";
import cebilogo from "../../img/cebilogo.jpg";
import styles from "./header.module.css";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoorhandles());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <div className={styles.cebilogo}>
          <Link to="/">
            <img src={cebilogo} alt="Логотип" width={70} height={70} />
          </Link>
        </div>

        <div className={styles.nav_menu}>
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
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Поиск продукции..."
              className={styles.inp}
            />
          </div>
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
