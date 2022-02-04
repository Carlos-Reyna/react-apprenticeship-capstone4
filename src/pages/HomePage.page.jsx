import mockBanners from '../mocks/en-us/featured-banners.json'
import mockCategories from '../mocks/en-us/product-categories.json'
import mockProducts from '../mocks/en-us/featured-products.json'
import Slider from "../components/Slider";
import { Box } from "../components/Styled/Custom.styled";
import CarrouselContainer from "../components/CarrouselContainer/CarrouselContainer.component";
import ProductGrid from "../components/ProductGrid";

function HomePage(){
    const {results} = mockBanners;
    const categories = mockCategories.results;
    const products = mockProducts.results
    

    return(
    <Box>
    <Slider items={results}/>

        <CarrouselContainer items={categories}/>
    <ProductGrid items={products}/>
    </Box>
    )    
}

export default HomePage;