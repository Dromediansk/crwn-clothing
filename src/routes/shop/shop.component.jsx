import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesByTitle } = useContext(CategoriesContext);

  return Object.keys(categoriesByTitle).map((title) => (
    <Fragment key={title}>
      <h2>{title}</h2>
      <div className="categories-container">
        {categoriesByTitle[title].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  ));
};

export default Shop;
