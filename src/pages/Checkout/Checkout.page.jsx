import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NormalButton } from '../../components/Styled/Custom.styled';
import {
  CheckoutGrid,
  CheckoutLayout,
  CheckoutSection,
  CheckoutProductWrapper,
  CheckoutProductGrid,
  CheckoutForm,
  FormGroup,
  CheckoutButtonWrapper,
} from './Checkout.styled';

function Checkout() {
  const { selectedProducts } = useSelector((state) => state.productStore);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    selectedProducts.forEach((product) => {
      newTotal += product.quantity * product.selectedProduct.data.price;
    });
    newTotal = newTotal.toFixed(2);
    setTotal(newTotal);
  }, [selectedProducts]);
  return (
    <CheckoutLayout>
      <CheckoutGrid>
        <h1>Checkout Information</h1>
        <CheckoutSection>
          <CheckoutForm>
            <FormGroup>
              <label htmlFor="name">
                {' '}
                Name
                <input id="name" name="name" />
              </label>
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">
                Email
                <input id="email" />
              </label>
            </FormGroup>

            <FormGroup>
              <label htmlFor="zip">
                Zip Code
                <input id="zip" />
              </label>
            </FormGroup>
            <FormGroup>
              <label htmlFor="additional">
                Additional information
                <textarea id="additional" draggable={false} />
              </label>
            </FormGroup>
          </CheckoutForm>
        </CheckoutSection>

        <h1>Order Summary </h1>
        <CheckoutSection>
          <CheckoutProductWrapper>
            <CheckoutProductGrid>
              <div>Name</div>
              <div>Quantity</div>
              <div>Price</div>
            </CheckoutProductGrid>
            {selectedProducts.map((product) => (
              <CheckoutProductGrid>
                <div>{product.selectedProduct.data.name}</div>
                <div>{product.quantity}</div>
                <div>{product.selectedProduct.data.price} $</div>
              </CheckoutProductGrid>
            ))}
            <CheckoutProductGrid>
              <div className="endItem">Total: {total} $</div>
            </CheckoutProductGrid>
          </CheckoutProductWrapper>
        </CheckoutSection>
        <CheckoutSection />
        <CheckoutButtonWrapper className="buttonWrapper">
          <NormalButton>Go back to cart</NormalButton>
          <NormalButton>Place order</NormalButton>
        </CheckoutButtonWrapper>
      </CheckoutGrid>
    </CheckoutLayout>
  );
}

export default Checkout;
