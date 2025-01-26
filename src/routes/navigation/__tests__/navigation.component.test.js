import { screen } from '@testing-library/react';

import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';

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
});
