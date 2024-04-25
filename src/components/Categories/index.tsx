import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";
import styles from "../Categories/categories.module.css";
import PhotoSlider from "../PhotoSlider";
import { RootState } from "../../app/store";

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <div className={styles.slider}>
        <PhotoSlider />
      </div>
      <div className={styles.categories}>
        <div className={styles.chapter_h}>
          <h2 className={styles.h2}> Дверные ручки</h2>
          <div className={styles.all_categories}>
            {categories.map((item: { _id: string; text: string }) => (
              <div className={styles.category} key={item._id}>
                <Link to={`/category/${item._id}`}>{item.text}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
