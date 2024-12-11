// External Libraries
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Redux
import { selectCategoriesMap } from '../../store/categories/categories.selector';

// Components
import ProductCard from '../../components/product-card/product-card.component';

// Styles
import { CategoryTitle, CategoryContainer } from './category.styles';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
