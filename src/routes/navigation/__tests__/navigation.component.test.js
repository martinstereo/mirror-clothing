import { screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';
import { signOutStart } from '../../../store/user/user.action';

describe('Navigation test', () => {
  test('It should render Sign In link and not a Sign Out link if there is no current user', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign out/i);
    expect(signInLinkElement).toBeNull();
  });

  test('should render Sign Out and not Sign In if there is a current user', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test('should render Cart Dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const cartDropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(cartDropdownTextElement).toBeInTheDocument();
  });

  test('should not render cartDropDown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });
    const cartDropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(cartDropdownTextElement).toBeNull();
  });

  test('should sign out user when Sign Out is clicked', async () => {
    const mockDispatch = jest.fn();

    // Spy on useDispatch from React Redux
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

    //clean up a mock's usage data between two assertions
    mockDispatch.mockClear();
  });
});
