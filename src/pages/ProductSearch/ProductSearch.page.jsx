import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import ProductGrid from '../../components/ProductGrid';
import { useSearchProducts } from '../../utils/hooks/useSearchProducts';

function ProductSearch() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get('q');

  const { searchResults } = useSearchProducts(params);
  const pageHeader =
    searchResults.data.length !== 0 ? 'Page Results' : 'No results found';

  if (searchResults.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ProductGrid
        heading={pageHeader}
        items={searchResults.data}
        toggleFilter={false}
        itemsPerPage={20}
        showPagination
        showDescription
      />
    </div>
  );
}

export default ProductSearch;
