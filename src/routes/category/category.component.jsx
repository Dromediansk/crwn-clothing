import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesByTitle } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesByTitle[category]);

  useEffect(() => {
    setProducts(categoriesByTitle[category]);
  }, [category, categoriesByTitle]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
