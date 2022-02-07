import styled from 'styled-components';

export const StyledSlider = styled.div`
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 705px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`;

StyledSlider.Image = styled.div`
  background-image: url(${(props) => props.url});
  height: ${(props) => `${props.height}px` || '705px'};
`;

StyledSlider.Heading = styled.h3`
  font-size: 1.7rem;
  color: #1c1c1c;
`;
