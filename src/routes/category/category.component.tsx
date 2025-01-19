import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, CategoryTitle } from './category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (categoriesMap && category) {
      console.log('Category:', category);
      console.log('CategoriesMap:', categoriesMap);
      setProducts(categoriesMap[category] || []);
    }
  }, [category, categoriesMap]);

  if (!category || !categoriesMap) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <CategoryContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryContainer>
      ) : (
        <h2>No products found in this category.</h2>
      )}
    </Fragment>
  );
};

export default Category;
