import styled from 'styled-components';

export const StyledCarrousel = styled.div`
  width: 100%;
  display: inherit;
  align-items: center;
  justify-content: center;

  .carousel-root {
    width: 80%;
  }

  @media only screen and (max-width: 920px) {
    .carousel-root {
      width: 80%;
    }
  }

  @media only screen and (max-width: 600px) {
    .carousel-root {
      width: 100%;
    }
  }
`;

StyledCarrousel.Title = styled.h3`
  font-size: 1.5rem;
  color: #1c1c1c;
`;
