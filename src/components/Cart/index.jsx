import { HeaderCart, ContextCart, CartAll } from './styles.js'
import { MdOutlineNoFood } from "react-icons/md";
import CartProduct from '../CartProduct/index.jsx';
import CartTotal from '../CartTotal/index.jsx';


    
function Cart({ cartProducts, setCartProducts }) {
    
    return (
        <CartAll>
            <HeaderCart><h4>Carrinho de compras</h4></HeaderCart>
            <ContextCart>
            {
                cartProducts.length === 0 ? 
                
                    <>
                        <MdOutlineNoFood/>
                        <h4>Sua sacola está vazia</h4>
                        <p>Adicione itens</p>
                    </>
                
                :   <>
                    {cartProducts.map((el) => <CartProduct cartProducts={cartProducts} setCartProducts={setCartProducts} productCart={el} key={el.id}/> )}
                    <CartTotal cartProducts={cartProducts} />
                    </>
            }
            </ContextCart> 
            
        </CartAll>



        
    )


}

export default Cart