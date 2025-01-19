import 'jest-styled-components';
import { render, screen, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from '../button.component';

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={{}}>{component}</ThemeProvider>);
};

describe('Button tests', () => {
  afterEach(() => {
    cleanup();
  });
  test('should render base button when nothing is passed', () => {
    renderWithTheme(<Button>Test</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyleRule('background-color', 'black');
  });
});
