import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { StyledSlider } from './Slider.styled';

function Slider({ items, displayTitle = true }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Slide easing="ease">
      {items.map((item) => (
        <StyledSlider className="each-slide" key={item.id}>
          <StyledSlider.Image
            height={item.data.main_image.dimensions.height}
            url={item.data.main_image.url}
          >
            {displayTitle ? (
              <StyledSlider.Heading>{item.data.title}</StyledSlider.Heading>
            ) : null}
          </StyledSlider.Image>
        </StyledSlider>
      ))}
    </Slide>
  );
}

export default Slider;
