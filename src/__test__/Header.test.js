import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Test for Header component', () => {
  test('Header render', () => {
    render(<Header />);
  });

  test('App title is rendered', () => {
    const { getByTitle } = render(<Header />);

    const appTitle = getByTitle('app-title');
    expect(appTitle).toBeInTheDocument();
  });

  test('App logo is rendered', () => {
    const { getByTitle } = render(<Header />);

    const appLogo = getByTitle('app-logo');
    expect(appLogo).toBeInTheDocument();
  });
});
