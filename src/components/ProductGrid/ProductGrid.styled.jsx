import styled from 'styled-components';

export const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15%);
  grid-auto-rows: 300px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-content:center;


  @media only screen and (max-width: 920px) {
    {
       grid-template-columns: repeat(2, 30%);
   }

  @media only screen and (max-width: 600px) {
    {
       grid-template-columns: repeat(1, 90%);
       margin-left:25%;
       
   }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
ProductWrapper.Image = styled.img`
  max-width: 200px;
  height: 200px;
`;

ProductWrapper.TextWrapper = styled.div`
  text-align: initial;
`;

ProductWrapper.Tags = styled.div``;

export const PaginationWrapper = styled.span`
  & ul {
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    column-gap: 10px;
    list-style-type: none;
    text-decoration: unset;
    text-align: center;
    justify-content: center;
  }
`;
