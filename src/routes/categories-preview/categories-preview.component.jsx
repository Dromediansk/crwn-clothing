import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesByTitle } = useContext(CategoriesContext);

  return Object.keys(categoriesByTitle).map((title) => {
    const products = categoriesByTitle[title];

    return <CategoryPreview key={title} title={title} products={products} />;
  });
};

export default CategoriesPreview;
