import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesByTitle,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesByTitle = useSelector(selectCategoriesByTitle);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesByTitle).map((title) => {
          const products = categoriesByTitle[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
