import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import Spinner from '../../components/spinner/spinner.component';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.reducer';

const Shop = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesMap = async () => {
      setIsLoading(true);
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
      setIsLoading(false);
    };

    getCategoriesMap();
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
