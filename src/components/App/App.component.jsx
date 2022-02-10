import { useState } from 'react';
import HomePage from '../../pages/Homepage';
import Content from '../Content';
import ProductList from '../../pages/ProductList';

function App() {
  const [showProducts, setShowProduct] = useState(false);

  const handleClick = (value) => {
    setShowProduct(value);
  };

  return (
    <Content handleClick={handleClick}>
      {!showProducts ? (
        <HomePage handleClick={handleClick} />
      ) : (
        <ProductList handleClick={handleClick} />
      )}
    </Content>
  );
}

export default App;
