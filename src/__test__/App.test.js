import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import Content from '../components/Content';
import { FEATURED_PRODUCT_HEADING, TEMP_PRODUCT_TITLE } from '../const';
import ProductList from '../pages/ProductList';
import Homepage from '../pages/Homepage';

let showProducts = false;

const handleClick = (value) => {
  showProducts = value;
};

describe('App is render', () => {
  test('Conditional rendering to product list', () => {
    const { getByTitle, findByTitle } = render(
      <App>
        <Content handleClick={handleClick}>
          {showProducts ? <Homepage /> : <ProductList />}
        </Content>
      </App>
    );

    const btnShow = getByTitle('btn-toggle-products');
    fireEvent.click(btnShow);

    setTimeout(async () => {
      const titleHeader = await findByTitle('header-product-grid');
      expect(titleHeader).toHaveTextContent(TEMP_PRODUCT_TITLE);
    }, 4000);
  });

  test('Conditional rendering to home', () => {
    const { getByTitle, findByTitle } = render(
      <App>
        <Content handleClick={handleClick}>
          {showProducts ? <Homepage /> : <ProductList />}
        </Content>
      </App>
    );

    const btnShow = getByTitle('btn-toggle-products');
    fireEvent.click(btnShow);

    setTimeout(async () => {
      const appHeader = getByTitle('app-title');
      fireEvent.click(appHeader);
      const titleHeader = await findByTitle('header-product-grid');
      expect(titleHeader).toHaveTextContent(FEATURED_PRODUCT_HEADING);
    }, 4000);
  });
});
