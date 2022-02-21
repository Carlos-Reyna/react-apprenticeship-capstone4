import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useStoreCart } from '../../utils/hooks/useStoreCart';
import { TitleHeading, Box, NormalButton } from '../Styled/Custom.styled';
import {
  PaginationWrapper,
  ProductWrapper,
  StyledProductGrid,
} from './ProductGrid.styled';

function ProductGrid({
  heading,
  items,
  showPagination = false,
  toggleFilter = false,
  itemsPerPage = 12,
  showDescription = false,
  type = 'LIST',
}) {
  const [currentItems, setCurrentItems] = useState(items);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { AddItemToCart } = useStoreCart();

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    setItemOffset(0);
  }, [toggleFilter]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const handleClick = (item) => {
    if (item.data.stock >= 1) {
      AddItemToCart(item, type);
    }
  };

  return (
    <Box>
      <TitleHeading
        fontSize="2rem"
        fontSizeAlt="2em"
        title="header-product-grid"
      >
        {heading}
      </TitleHeading>

      <StyledProductGrid showDescription={showDescription}>
        {currentItems.map((item) => (
          <ProductWrapper key={item.id}>
            <ProductWrapper.Image src={item.data.images[0].image.url} />
            <ProductWrapper.Content>
              <ProductWrapper.TextWrapper>
                <Link to={`/products/${item.id}`}>{item.data.name}</Link>
              </ProductWrapper.TextWrapper>
              <ProductWrapper.TextWrapper>
                {item.data.category.slug}
              </ProductWrapper.TextWrapper>
              {showDescription ? (
                <ProductWrapper.TextWrapper>
                  {item.data.short_description}
                </ProductWrapper.TextWrapper>
              ) : null}
              <ProductWrapper.TextWrapper>
                Price: {item.data.price}$
              </ProductWrapper.TextWrapper>
            </ProductWrapper.Content>
            <NormalButton onClick={() => handleClick(item)}>
              {item.data.stock === 0 ? 'No Items in Stock' : 'Add to cart'}
            </NormalButton>
          </ProductWrapper>
        ))}
      </StyledProductGrid>

      {currentItems.length !== 0 && showPagination ? (
        <PaginationWrapper>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </PaginationWrapper>
      ) : null}
    </Box>
  );
}

ProductGrid.defaultProps = {
  showPagination: false,
  toggleFilter: false,
  itemsPerPage: 12,
  showDescription: false,
  type: 'LIST',
};

ProductGrid.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  showPagination: PropTypes.bool,
  toggleFilter: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  showDescription: PropTypes.bool,
  type: PropTypes.string,
};

export default ProductGrid;
