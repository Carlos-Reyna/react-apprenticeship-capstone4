import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StyledCarrousel } from './StyledCarrousel.styled';

function CarrouselContainer({ items }) {
  return (
    <StyledCarrousel>
      <Carousel showArrows showThumbs>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.data.main_image.url} alt={item.data.name} />
            <StyledCarrousel.Title> {item.data.name}</StyledCarrousel.Title>
          </div>
        ))}
      </Carousel>
    </StyledCarrousel>
  );
}

export default CarrouselContainer;
