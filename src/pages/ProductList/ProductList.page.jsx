import { useState } from 'react';
import { Box, TitleHeading } from '../../components/Styled/Custom.styled';
import { CategoryItem, ProductSidebar } from './ProductList.styled';
import productsJson from '../../mocks/en-us/products.json';
import categoriesJson from '../../mocks/en-us/product-categories.json';
import ProductGrid from '../../components/ProductGrid';
import { TEMP_PRODUCT_TITLE } from '../../const';
import { filterProducts, getCategories } from '../../utils/ItemsHelper';

function ProductList() {
  const initialProducts = productsJson.results;
  const initialCategories = getCategories(categoriesJson.results);
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);

  const handleFilter = (category) => {
    const nextFilter = [...categories];
    const index = categories.findIndex((cat) => cat.data.name === category);

    nextFilter[index].isSelected = !nextFilter[index].isSelected;

    setCategories(nextFilter);
    const productsFiltered = filterProducts(categories, initialProducts);
    setProducts(productsFiltered);
  };

  return (
    <Box width="80%" direction="row">
      <ProductSidebar>
        <TitleHeading fontSize="2rem" fontSizeAlt="0.9rem">
          Categories
        </TitleHeading>
        <ul>
          {categories.map((cat) => (
            <ol key={cat.id}>
              <CategoryItem
                isSelected={cat.isSelected}
                onClick={() => handleFilter(cat.data.name)}
              >
                <p> {cat.data.name}</p>
              </CategoryItem>
            </ol>
          ))}
        </ul>
      </ProductSidebar>
      <ProductGrid heading={TEMP_PRODUCT_TITLE} items={products} />
    </Box>
  );
}

export default ProductList;
