import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDoorhandles } from "../../features/doorhandlesSlice";
import DoorhandlesCard from "../DoorhandlesCard";
import styles from "../Doorhandles/doorhandles.module.css";
import { RootState } from "../../app/store";


interface Props {
  searchQuery?: string;
}

const Doorhandles: React.FC<Props> = ({ searchQuery }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();

  const doorhandles = useSelector((state: RootState) => state.doorhandles.doorhandles);

  useEffect(() => {
    dispatch(fetchDoorhandles());
  }, [dispatch]);

  // Фильтрация doorhandles по id и поисковому запросу
  const filteredDoorhandles = doorhandles.filter((item: any) => {
    // Фильтрация по id
    const matchesId = !id || item.categoryId._id === id;
    // Фильтрация по поисковому запросу
    const matchesQuery = item.name.toLowerCase().includes(searchQuery?.toLowerCase() || "");
    return matchesId && matchesQuery;
  });

  return (
    <>
      
      <div className={styles.doorhandles}>
        {filteredDoorhandles.map((item: any) => (
          <DoorhandlesCard item={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default Doorhandles;