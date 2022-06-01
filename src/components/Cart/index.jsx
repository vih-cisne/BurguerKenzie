import {
  HeaderCart,
  ContextCart,
  BackgroundCart,
  ContainerButtonCart,
  CartAll,
  CartButton,
} from "./styles.js";
import { MdOutlineNoFood } from "react-icons/md";
import CartProduct from "../CartProduct/index.jsx";
import CartTotal from "../CartTotal/index.jsx";
import { useState } from "react";
import { ImCart } from "react-icons/im";

function Cart({ cartProducts, setCartProducts }) {
  function getCount() {
    return cartProducts.reduce((acc, actual) => acc + actual.quantity, 0);
  }

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <ContainerButtonCart>
        <CartButton onClick={() => setShowCart(!showCart)}>
          <ImCart />
          <span>{getCount()}</span>
        </CartButton>
      </ContainerButtonCart>
      <BackgroundCart showCart={showCart}>
        <CartAll >
          <HeaderCart>
            <h4>Carrinho de compras</h4>
          </HeaderCart>
          <ContextCart>
            {cartProducts.length === 0 ? (
              <>
                <MdOutlineNoFood />
                <h4>Sua sacola está vazia</h4>
                <p>Adicione itens</p>
              </>
            ) : (
              <>
                {cartProducts.map((el, index) => (
                  <CartProduct
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    index={index}
                    productCart={el}
                    key={el.id}
                  />
                ))}
                <CartTotal
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              </>
            )}
          </ContextCart>
        </CartAll>
      </BackgroundCart>
    </>
  );
}

export default Cart;
