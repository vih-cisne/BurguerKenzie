import { ItemCart, ImgCart ,CartMiddle, CartEnd, QuantityControl } from './styles.js'
import { MdDelete } from "react-icons/md";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";

function CartProduct({ productCart, setCartProducts, cartProducts, index }) {

    const { img, name, price, category, quantity, id } = productCart

    function removeItem() {
        let productsAfterRemove = cartProducts.filter((el) => el.id !== productCart.id)
    
        setCartProducts(productsAfterRemove)
    }

    function addQuantity() {
        
        const newProductsCart = cartProducts
        newProductsCart[index].quantity += 1

        setCartProducts([...newProductsCart])
    }

    function minusQuantity() {
        
        if(quantity > 1) {
            const newProductsCart = cartProducts.filter(el => el.id !== id)
            productCart.quantity -= 1

            setCartProducts([...newProductsCart, productCart])
        }
    }


    return (
        <ItemCart>
            <ImgCart><img src={img} alt='imagem produto'/></ImgCart>
            <CartMiddle>
                <h4>{name}</h4>
                <small>{category}</small>
            </CartMiddle>
            <CartEnd>
                <button onClick={removeItem}><MdDelete /></button>
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</p>
                <QuantityControl>
                    <button onClick={minusQuantity}><BsFillPatchMinusFill/></button>
                    <span>{quantity}</span>
                    <button onClick={addQuantity}><BsFillPatchPlusFill/></button>

                </QuantityControl>
            </CartEnd>
        </ItemCart>
    )
}

export default CartProduct