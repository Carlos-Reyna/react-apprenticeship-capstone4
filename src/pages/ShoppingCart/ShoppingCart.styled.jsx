import styled from 'styled-components';

export const ShoppingItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 250px;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  margin: 0px 10px 0px 10px;
`;

ShoppingItemGrid.ItemImage = styled.img`
  max-height: 100%;
  width: 500px;
  object-fit: contain;
`;

ShoppingItemGrid.Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  width: 100%;

  & .product-item {
    margin-left: 10px;
  }

  & .align-end {
    align-items: flex-end;
    width: 100%;
    padding: 10px;
  }
`;

ShoppingItemGrid.Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;

  i {
    padding: 20px;
  }
`;
export const GridCartIcon = styled.i`
  margin-left: 5px;
  margin-left: 10px;
`;
