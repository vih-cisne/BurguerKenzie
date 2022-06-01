import {
  HeaderCart,
  ContextCart,
  BackgroundCart,
  ContainerButtonCart,
  CartAll,
  CartButton,
  ListCart,
  ButtonClose
} from "./styles.js";
import { MdOutlineNoFood } from "react-icons/md";
import CartProduct from "../CartProduct/index.jsx";
import CartTotal from "../CartTotal/index.jsx";
import { useState } from "react";
import { ImCart } from "react-icons/im";
import { IoCloseCircle } from "react-icons/io5";


function Cart({ cartProducts, setCartProducts }) {
  function getCount() {
    return cartProducts.reduce((acc, actual) => acc + actual.quantity, 0);
  }

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <ContainerButtonCart>
        <CartButton onClick={() => setShowCart(true)}>
          <ImCart />
          <span>{getCount()}</span>
        </CartButton>
      </ContainerButtonCart>
      <BackgroundCart showCart={showCart}>
        <CartAll >
          <HeaderCart>
            <h4>Carrinho de compras</h4><ButtonClose onClick={() => setShowCart(false)}><IoCloseCircle/></ButtonClose>
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
                <ListCart>
                {cartProducts.map((el, index) => (
                  <CartProduct
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    index={index}
                    productCart={el}
                    key={el.id}
                  />
                ))}
                </ListCart>
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
