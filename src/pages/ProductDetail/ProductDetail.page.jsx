import { useState } from 'react';
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
import { useStoreCart } from '../../utils/hooks/useStoreCart';

function ProductDetail() {
  const { productId } = useParams();

  const { productInfo, updateProductStock } = useProduct(productId);

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { AddItemToCart } = useStoreCart();

  if (productInfo.isLoading) {
    return (
      <Box>
        {' '}
        <Loading />
      </Box>
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleClick = () => {
    if (quantity <= 0) {
      setError(true);
      setErrorMessage('Select at least one item');
    } else if (quantity > productInfo.product.data.stock) {
      setError(true);
      setErrorMessage('No enough items in stock');
    } else {
      setError(false);
      setErrorMessage('');
      updateProductStock(quantity);
      AddItemToCart(productInfo.product, 'LIST', quantity);
    }
  };
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
        {productInfo.product.data.stock === 0 ? (
          'No more items in stock'
        ) : (
          <FlexRow>
            <input value={quantity} onChange={(e) => handleChange(e)} />
            <NormalButton onClick={handleClick}>Add items to cart</NormalButton>
            {error ? errorMessage : null}
          </FlexRow>
        )}

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
