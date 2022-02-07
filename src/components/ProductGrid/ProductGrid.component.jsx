import { FEATURED_PRODUCT_HEADING } from '../../const';
import { ProductWrapper, StyledProductGrid } from './ProductGrid.styled';

function ProductGrid({ items }) {
  return (
    <>
      <h1>{FEATURED_PRODUCT_HEADING}</h1>
      <StyledProductGrid>
        {items.map((item) => (
          <ProductWrapper key={item.id}>
            <ProductWrapper.Image src={item.data.images[0].image.url} />
            <ProductWrapper.TextWrapper>
              {item.data.name}
            </ProductWrapper.TextWrapper>
            <ProductWrapper.TextWrapper>
              {item.data.category.slug}
            </ProductWrapper.TextWrapper>
            <ProductWrapper.TextWrapper>
              Price: {item.data.price}$
            </ProductWrapper.TextWrapper>
          </ProductWrapper>
        ))}
      </StyledProductGrid>
    </>
  );
}

export default ProductGrid;
