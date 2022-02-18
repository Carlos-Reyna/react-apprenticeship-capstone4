import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  NormalButton,
  TitleHeading,
} from '../../components/Styled/Custom.styled';
import { CategoryItem, ProductSidebar } from './ProductList.styled';
import ProductGrid from '../../components/ProductGrid';
import { TEMP_PRODUCT_TITLE } from '../../const';
import { useCategories } from '../../utils/hooks/UseCategories';
import { useProducts } from '../../utils/hooks/useProducts';
import Loading from '../../components/Loading';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll('category');

  const { categories, filterCategories, clearFilter } = useCategories(params);
  const { productStore, applyFilter } = useProducts(
    'PRODUCTS',
    categories.data
  );

  const [toggleFilter, setToggleFilter] = useState(false);

  const handleCatChange = (catName) => {
    const categoryParams = filterCategories(catName);
    applyFilter(categories.data);

    if (categoryParams.length === 0) {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryParams });
    }

    setToggleFilter(!toggleFilter);
  };

  const clearCategories = () => {
    setSearchParams({});
    clearFilter();
    applyFilter(categories.data);
  };

  if (categories.isLoading) {
    return (
      <Box>
        {' '}
        <Loading />
      </Box>
    );
  }

  return (
    <Box width="80%" direction="row">
      <ProductSidebar>
        <TitleHeading fontSize="2rem" fontSizeAlt="0.9rem">
          Categories
        </TitleHeading>
        <ul>
          <ol>
            <NormalButton onClick={clearCategories}>
              Clear Categories
            </NormalButton>
          </ol>
          {categories.data.map((cat) => (
            <ol key={cat.id}>
              <CategoryItem
                isSelected={cat.isSelected}
                onClick={() => handleCatChange(cat.data.name)}
              >
                <p> {cat.data.name}</p>
              </CategoryItem>
            </ol>
          ))}
        </ul>
      </ProductSidebar>
      <ProductGrid
        heading={TEMP_PRODUCT_TITLE}
        items={productStore.filteredProducts}
        toggleFilter={toggleFilter}
        showPagination
      />
    </Box>
  );
}

export default ProductList;
