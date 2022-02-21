import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FlexColumn,
  FlexRow,
  ItemLabel,
  NormalButton,
} from '../../components/Styled/Custom.styled';
import { ShoppingItemGrid, GridCartIcon } from './ShoppingCart.styled';
import { useStoreCart } from '../../utils/hooks/useStoreCart';

function ShoppingCart() {
  const { productStore } = useSelector((state) => state);
  const [total, setTotal] = useState(0);
  const { selectedProducts } = productStore;
  const { AddItemToCart, removeFromCart } = useStoreCart();
  useEffect(() => {
    let newTotal = 0;
    selectedProducts.forEach((product) => {
      newTotal += product.quantity * product.selectedProduct.data.price;
    });
    newTotal = Math.round(newTotal);
    setTotal(newTotal);
  }, [selectedProducts]);

  const handleClick = (product, currentValue) => {
    const { selectedProduct } = product;

    if (currentValue <= selectedProduct.data.stock) {
      AddItemToCart(selectedProduct, 'LIST', 1);
    }
  };

  const removeItem = (product, currentValue) => {
    if (currentValue !== 1) {
      const { selectedProduct } = product;
      AddItemToCart(selectedProduct, 'LIST', -1);
    }
  };

  if (total === 0) {
    return (
      <FlexColumn>
        <h1>No items added on cart</h1>
      </FlexColumn>
    );
  }

  return (
    <FlexColumn>
      <ShoppingItemGrid>
        {selectedProducts.map((product) => (
          <ShoppingItemGrid.Wrapper key={product.id}>
            <ShoppingItemGrid.ItemImage
              src={product.selectedProduct.data.mainimage.url}
            />
            <FlexColumn className="product-item">
              <ItemLabel>{product.selectedProduct.data.name}</ItemLabel>
              <ItemLabel>
                Unit Price: {product.selectedProduct.data.price} $
              </ItemLabel>
              <FlexRow>
                <NormalButton
                  onClick={() => removeItem(product, product.quantity)}
                >
                  -
                </NormalButton>{' '}
                <input disabled value={product.quantity} />
                <NormalButton
                  onClick={() => handleClick(product, product.quantity, true)}
                >
                  +
                </NormalButton>
              </FlexRow>

              <ItemLabel>
                Subtotal:{' '}
                {product.quantity * product.selectedProduct.data.price}{' '}
              </ItemLabel>
            </FlexColumn>
            <ShoppingItemGrid.Item>
              <GridCartIcon
                className="fa fa-times"
                onClick={() => removeFromCart(product.id)}
              />
            </ShoppingItemGrid.Item>
          </ShoppingItemGrid.Wrapper>
        ))}
        <ShoppingItemGrid.Wrapper>
          <FlexColumn className="align-end">
            <ItemLabel>Total: {total}$</ItemLabel>
            <NormalButton>
              <Link to="/checkout">Proceed to checkout</Link>
            </NormalButton>
          </FlexColumn>
        </ShoppingItemGrid.Wrapper>
      </ShoppingItemGrid>
    </FlexColumn>
  );
}

export default ShoppingCart;
