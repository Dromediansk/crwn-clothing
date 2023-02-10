import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategoriesByTitle } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesByTitle = useSelector(selectCategoriesByTitle);

  return Object.keys(categoriesByTitle).map((title) => {
    const products = categoriesByTitle[title];

    return <CategoryPreview key={title} title={title} products={products} />;
  });
};

export default CategoriesPreview;
