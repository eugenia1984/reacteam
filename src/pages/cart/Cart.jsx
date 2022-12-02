import { useState } from 'react';
import { useLocation } from "react-router-dom";

import Header from '../../components/Layout/Header';
import Products from '../../components/Clothes/Products';
import Cart from '../../components/Cart/Cart';
import CartProvider from '../../tienda/CartProvider';

export const Carts = () => {
  const {state} = useLocation();
  const { name } = state;
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products name={name}/>
      </main>
    </CartProvider>
  );
}