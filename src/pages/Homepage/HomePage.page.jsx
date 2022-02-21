import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import {
  Box,
  FlexColumn,
  NormalButton,
} from '../../components/Styled/Custom.styled';
import CarrouselContainer from '../../components/CarrouselContainer/CarrouselContainer.component';
import ProductGrid from '../../components/ProductGrid';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { ValidateRequestObject } from '../../utils/ItemsHelper';
import { FEATURED_PRODUCT_HEADING, FEATURED_QUERY } from '../../const';
import { useCategories } from '../../utils/hooks/UseCategories';
import Loading from '../../components/Loading';

function HomePage() {
  const [banners, setBanners] = useState([]);
  const { productStore } = useFeaturedProducts(FEATURED_QUERY);
  const { categories } = useCategories([]);
  const { data } = useFeaturedBanners();

  useEffect(() => {
    if (ValidateRequestObject(data)) {
      const { results } = data;
      setBanners(results);
    }
  }, [data]);

  if (categories.isLoading) {
    return (
      <Box>
        {' '}
        <Loading />{' '}
      </Box>
    );
  }

  return (
    <Box>
      <Slider items={banners} />
      <CarrouselContainer items={categories.data} />
      <ProductGrid
        heading={FEATURED_PRODUCT_HEADING}
        items={productStore.featuredProductData}
        showPagination={false}
        type="FEATURED"
      />
      <FlexColumn.Centered>
        <NormalButton title="btn-toggle-products">
          <Link to="/products">Show all products</Link>
        </NormalButton>
      </FlexColumn.Centered>
    </Box>
  );
}

export default HomePage;
