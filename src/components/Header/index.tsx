import React, { useState, useEffect } from "react";
import cebilogo from "../../img/cebilogo.jpg";
import { Link } from "react-router-dom";
import styles from "../Header/header.module.css";
import { FaSearch } from "react-icons/fa";
import DoorhandlesCard from "../DoorhandlesCard";


const Header = ({ doorhandles }) => {

 
  
  // Предполагаем, что doorhandles передаётся как пропс
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoorhandles, setFilteredDoorhandles] = useState([])

useEffect(() => {
  setFilteredDoorhandles(doorhandles);
}, [doorhandles]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query) {
      setFilteredDoorhandles(doorhandles); // Если запрос пустой, показываем все товары
      return;
    }

    // Фильтрация товаров по названию
    const filtered = doorhandles.filter((doorhandles) =>
      doorhandles.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoorhandles(filtered); // Обновляем состояние отфильтрованными товарами
  };
  


  // Возвращаем JSX вашего компонента...

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

        <form
          role="search"
          method="get"
          action="/"
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <button type="submit" className={styles.btn1}>
            <FaSearch /> <i></i>
          </button>
          <input
            type="search"
            placeholder="Поиск продукции"
            className={styles.inp}
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <div>
            {filteredDoorhandles?.map((item) => (
              <DoorhandlesCard item={item} key={item._id} />
            ))}
          </div>
        </form>
        <div className={styles.call}>
          <span>+79899309981</span>
          <span>goldtrader95@mail.ru</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
