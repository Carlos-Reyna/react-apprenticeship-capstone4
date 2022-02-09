import ReactPaginate from 'react-paginate';
import { TitleHeading, Box } from '../Styled/Custom.styled';
import {
  PaginationWrapper,
  ProductWrapper,
  StyledProductGrid,
} from './ProductGrid.styled';

function ProductGrid({ heading, items }) {
  return (
    <Box>
      <TitleHeading fontSize="2rem" title="header-product-grid">
        {heading}
      </TitleHeading>
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

      {items.length !== 0 ? (
        <PaginationWrapper>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            pageRangeDisplayed={5}
            pageCount={5}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </PaginationWrapper>
      ) : null}
    </Box>
  );
}

export default ProductGrid;
