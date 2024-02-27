import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";
import { useEffect } from "react";
import DoorhandlesCard from "../DoorhandlesCard"; 
import style from '../Doorhandles/doorhandles.module.css'

const Doorhandles = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const doorhandles = useSelector((state: any) => state.doorhandles.doorhandles); // Получаем doorhandles из Redux

  useEffect(() => {
    dispatch(fetchDoorhandles() as any);
  }, []);
  

  // Дополнительная проверка наличия doorhandles и его являения массивом перед использованием filter
  const filteredDoorhandles = Array.isArray(doorhandles)
    ? doorhandles.filter((item) => {
        if (!id) return true;

        return item.genresId === id;
      })
    : [];


  return (
    <div className={style.doorhandles}>
      {filteredDoorhandles?.map((item) => (
        <DoorhandlesCard item={item} key={item._id}/>
      ))}
    </div>
  );
};

export default Doorhandles;

  