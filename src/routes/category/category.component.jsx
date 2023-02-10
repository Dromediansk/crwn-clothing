import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesByTitle } from "../../store/categories/category.selector";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesByTitle = useSelector(selectCategoriesByTitle);

  const [products, setProducts] = useState(categoriesByTitle[category]);

  useEffect(() => {
    setProducts(categoriesByTitle[category]);
  }, [category, categoriesByTitle]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
