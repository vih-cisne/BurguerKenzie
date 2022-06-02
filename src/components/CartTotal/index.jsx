import { useEffect } from "react"
import { Total, RemoveAll } from "./styles"



function CartTotal({ cartProducts, setCartProducts }) {
    const total = cartProducts.reduce((acc, atual) => acc + atual.price*atual.quantity , 0)

    useEffect(() => {
    
        localStorage.setItem('productsCart-burguerKenzie', JSON.stringify([...cartProducts]))

        return () => {
            
            localStorage.setItem('productsCart-burguerKenzie', JSON.stringify([]))
            
        }

    }, [cartProducts])
    
    return (
        <>
        <Total>
            <h4>Total</h4>
            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>

        </Total>
        <RemoveAll onClick={() => setCartProducts([])}>Remover todos</RemoveAll>
        </>
    )
}

export default CartTotal