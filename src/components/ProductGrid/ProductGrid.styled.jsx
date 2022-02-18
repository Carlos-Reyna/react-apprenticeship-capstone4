import styled from 'styled-components';

export const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-auto-rows: ${(props) => (props.showDescription ? '500px' : '430px')};
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-content:center;
  margin-right:${(props) => (props.marginRight ? props.marginRight : '3%')};
  margin-left:${(props) => (props.marginLeft ? props.marginLeft : '3%')};

  @media only screen and (max-width: 920px) {
    {
       grid-template-columns: repeat(2, 30%);
   }

  @media only screen and (max-width: 600px) {
    {
       grid-template-columns: repeat(1, 90%);
       
   }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
ProductWrapper.Image = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;


}
`;

ProductWrapper.Content = styled.div`
  height: 150px;
  overflow: hidden;
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
    padding: 0;
  }
`;
