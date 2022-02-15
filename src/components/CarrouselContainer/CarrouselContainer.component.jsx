import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { StyledCarrousel } from './StyledCarrousel.styled';

function CarrouselContainer({ items }) {
  const navigate = useNavigate();
  const handleClick = (categoryName) => {
    navigate({
      pathname: `/products`,
      search: `?${createSearchParams({ category: categoryName })}`,
    });
  };

  return (
    <StyledCarrousel>
      <Carousel showArrows showThumbs>
        {items.map((item) => (
          <div key={item.id} role="img">
            <img
              type="image"
              src={item.data.main_image.url}
              alt={item.data.name}
              onClick={() => {
                handleClick(item.data.name);
              }}
            />
            <StyledCarrousel.Title> {item.data.name}</StyledCarrousel.Title>
          </div>
        ))}
      </Carousel>
    </StyledCarrousel>
  );
}

CarrouselContainer.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default CarrouselContainer;
