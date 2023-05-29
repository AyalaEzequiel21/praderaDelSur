import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../components';

describe('Header component', () => {
  it('renders the logo link correctly', () => {
    const { getByAltText } = render(<Header />);
    const logoElement = getByAltText('Logo pradera del sur');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the mobile menu correctly when window width is less than medium breakpoint', () => {
    // Mock the useGlobalContext hook to return a smaller window width
    jest.mock('./useGlobalContext', () => ({
      useGlobalContext: jest.fn(() => ({ windowWidth: 500 })),
    }));

    const { getByTestId } = render(<Header />);
    const menuMobileElement = getByTestId('menu-mobile');
    expect(menuMobileElement).toBeInTheDocument();
  });
});