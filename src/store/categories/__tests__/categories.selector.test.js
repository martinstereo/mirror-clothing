import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../categories.selector';

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: 'mens',
        imageUrl: 'htttps...',
        items: [
          { id: 1, name: 'product 1' },
          { id: 2, name: 'product 2' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'htttps...2',
        items: [
          { id: 3, name: 'product 3' },
          { id: 4, name: 'product 4' },
        ],
      },
    ],
  },
};

describe('categoriesSelector test', () => {
  test('selectCategories should return categories data', () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test('should return isLoading state', () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toEqual(mockState.categories.isLoading);
    expect(isLoading).toEqual(false);
  });

  test('categoriesMap should convert item array to appropriate map', () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
      ],
      womens: [
        { id: 3, name: 'product 3' },
        { id: 4, name: 'product 4' },
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);

    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
