import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCategoriesByTitle } from "../../store/categories/cateogry.action";
import { getCategoriesAndDocuments } from "../../utils/firebase";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesByTitle = async () => {
      const categoriesByTitle = await getCategoriesAndDocuments();
      dispatch(setCategoriesByTitle(categoriesByTitle));
    };

    getCategoriesByTitle();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
