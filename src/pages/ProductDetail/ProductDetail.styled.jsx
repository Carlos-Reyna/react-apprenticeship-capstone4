import styled from 'styled-components';

export const ProductDetailGrid = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 500px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  margin-right:${(props) => (props.marginRight ? props.marginRight : '3%')};
  margin-left:${(props) => (props.marginLeft ? props.marginLeft : '3%')};
  overflow: auto;
  @media only screen and (max-width: 920px) {
    {
       grid-template-columns: 1fr;
   }

  @media only screen and (max-width: 600px) {
    {
      grid-template-columns: 1fr;
       
   }

`;

export const SwiperImg = styled.img`
  object-fit: cover;
  height: 500px;
  width: 100%;
`;
