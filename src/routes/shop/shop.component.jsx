import React, { useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h1 onClick={() => navigate(`/${title}`)}>{title}</h1>
          <div className='products-container'>
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
