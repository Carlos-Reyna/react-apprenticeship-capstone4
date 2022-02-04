import styled from 'styled-components';

export const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-auto-rows: 300px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-content:center;


  @media only screen and (max-width: 920px) {
    {
       grid-template-columns: repeat(2, 33%);
   }

  @media only screen and (max-width: 600px) {
    {
       grid-template-columns: repeat(1, 100%);
   }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
ProductWrapper.Image = styled.img`
  max-width: 200px;
  height: 200px;
`;

ProductWrapper.TextWrapper = styled.div`
  text-align: initial;
`;

ProductWrapper.Tags = styled.div``;
