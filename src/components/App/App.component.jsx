import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../../pages/Homepage';
import Content from '../Content';
import ProductList from '../../pages/ProductList';
import ProductDetail from '../../pages/ProductDetail';
import appStore from '../../app.store';
import ProductSearch from '../../pages/ProductSearch';

function App() {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Content>
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="search" element={<ProductSearch />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Content>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
