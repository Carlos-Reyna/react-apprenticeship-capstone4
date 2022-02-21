import styled from 'styled-components';

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  width: 100%;

  & .buttonWrapper {
    grid-column-end: 2;
  }
`;

export const CheckoutLayout = styled.div`
  display: flex;
  width: 80%;
  margin: 0 10% 0 10%;
  align-content: center;
`;

export const CheckoutSection = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;

  h1 {
    padding-left: 20px;
  }
`;

export const CheckoutProductWrapper = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-top: 10px;
`;

export const CheckoutProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-grap: 20px;

  .endItem {
    grid-column-end: 4;
  }
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: inherit;
`;

export const FormGroup = styled.div`
  width: 100%;
  label {
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }
`;

export const CheckoutButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  button {
    margin: 5px;
  }
`;
