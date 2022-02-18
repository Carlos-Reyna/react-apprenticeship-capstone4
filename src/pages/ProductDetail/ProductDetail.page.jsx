import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Box,
  FlexColumn,
  ItemLabel,
  NormalButton,
  FlexRow,
} from '../../components/Styled/Custom.styled';
import { useProduct } from '../../utils/hooks/useProduct';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Loading from '../../components/Loading';
import { ProductDetailGrid, SwiperImg } from './ProductDetail.styled';

function ProductDetail() {
  const { productId } = useParams();

  const { productInfo } = useProduct(productId);

  if (productInfo.isLoading) {
    return (
      <Box>
        {' '}
        <Loading />
      </Box>
    );
  }

  return (
    <ProductDetailGrid>
      {productInfo.product.data.images.length !== 0 ? (
        <Swiper spaceBetween={0} slidesPerView={1} style={{ width: '70%' }}>
          {productInfo.product.data.images.map((item) => (
            <SwiperSlide key={item.image.url}>
              {' '}
              <SwiperImg src={item.image.url} alt="product" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
      <FlexColumn>
        <ItemLabel>Display Name: {productInfo.product.data.name}</ItemLabel>
        <ItemLabel>Unit Price: {productInfo.product.data.price} $</ItemLabel>
        <ItemLabel>SKU: {productInfo.product.data.sku}</ItemLabel>
        <ItemLabel>
          Category: {productInfo.product.data.category.slug}
        </ItemLabel>
        <p>{productInfo.product.data.description[0].text}</p>
        <ItemLabel>
          {' '}
          Tags:
          {productInfo.product.tags.length !== 0
            ? productInfo.product.tags.map((tag) => (
                <ItemLabel key={tag}>{` ${tag} `}</ItemLabel>
              ))
            : null}
        </ItemLabel>
        <FlexRow>
          <input placeholder="0" />
          <NormalButton>Add to Cart</NormalButton>
        </FlexRow>
        <table>
          <tbody>
            <tr>
              {productInfo.product.data.specs.map((specs) => (
                <td key={specs.spec_name}>{specs.spec_name}</td>
              ))}
            </tr>
            <tr>
              {productInfo.product.data.specs.map((specs) => (
                <td key={specs.spec_value}>{specs.spec_value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </FlexColumn>
    </ProductDetailGrid>
  );
}

export default ProductDetail;
