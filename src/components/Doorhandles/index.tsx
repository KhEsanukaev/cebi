import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";
import DoorhandlesCard from "../DoorhandlesCard";
import styles from "../Doorhandles/doorhandles.module.css";

const Doorhandles = ({ searchQuery }: any) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const doorhandles = useSelector(
    (state: any) => state.doorhandles.doorhandles // сделать фильтрацию, если id в парамсе есть фильтруем по ид иначе выводим все как есть
  );

  useEffect(() => {
    dispatch(fetchDoorhandles());
  }, [dispatch]);

  // Фильтрация doorhandles по id и поисковому запросу
  const filteredDoorhandles = doorhandles.filter((item: any) => {
    // Фильтрация по id
    const matchesId = !id || item.genresId === id;
    // Фильтрация по поисковому запросу
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesId && matchesQuery;
  });

  return (
    <>
      <div className={styles.input}></div>
      <div className={styles.doorhandles}>
        {filteredDoorhandles.map((item: any) => (
          <DoorhandlesCard item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default Doorhandles;
