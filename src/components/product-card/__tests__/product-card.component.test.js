import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';

import ProductCard from '../product-card.component';

describe('Product Card Component tests', () => {
  test('it should add product item when Product card button is clicked', async () => {
    const mockProductItem = {
      id: 1,
      imageUrl: 'image',
      name: 'Shoes',
      price: 20,
    };

    const { store } = renderWithProviders(<ProductCard product={mockProductItem} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
