import { ItemCart, CartMiddle, CartEnd } from './styles.js'
import { MdDelete } from "react-icons/md";

function CartProduct({ productCart, setCartProducts, cartProducts }) {

    const { img, name, price, category, quantity } = productCart

    function removeItem() {
        let productsAfterRemove = cartProducts.filter((el) => el.id !== productCart.id)
    
        setCartProducts(productsAfterRemove)
    }

    return (
        <ItemCart>
            <img src={img} alt='imagem produto'/>
            <CartMiddle>
                <h4>{name}</h4>
                <small>{category}</small>
            </CartMiddle>
            <CartEnd>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</p>
                <small>{quantity}x</small>
                <button onClick={removeItem}><MdDelete /></button>
            </CartEnd>
        </ItemCart>
    )
}

export default CartProduct