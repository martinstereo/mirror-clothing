import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  PreviewContainer,
} from './category-preview.styles';
import { CategoryItem } from '../../store/categories/categories.types';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <PreviewContainer>
        {products.slice(0, 4).map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
