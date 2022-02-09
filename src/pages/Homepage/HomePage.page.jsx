import { useState } from 'react';
import mockBanners from '../../mocks/en-us/featured-banners.json';
import mockCategories from '../../mocks/en-us/product-categories.json';
import mockProducts from '../../mocks/en-us/featured-products.json';
import Slider from '../../components/Slider';
import { Box, NormalButton } from '../../components/Styled/Custom.styled';
import CarrouselContainer from '../../components/CarrouselContainer/CarrouselContainer.component';
import ProductGrid from '../../components/ProductGrid';

function HomePage({ handleClick }) {
  const [loading, setLoading] = useState(false);
  const { results } = mockBanners;
  const categories = mockCategories.results;
  const products = mockProducts.results;

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClick(true);
    }, 2000);
  };

  return (
    <Box>
      {loading ? (
        <h2>
          Loading products <i className="fas fa-spinner fa-spin" />{' '}
        </h2>
      ) : (
        <>
          <Slider items={results} />
          <CarrouselContainer items={categories} />
          <ProductGrid items={products} />
          <NormalButton
            width="50%"
            marginLeft="30%"
            onClick={() => handleLoading()}
            title="btn-toggle-products"
          >
            Show all products
          </NormalButton>
        </>
      )}
    </Box>
  );
}

export default HomePage;
