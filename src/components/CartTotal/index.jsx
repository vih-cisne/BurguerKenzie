

function CartTotal({ cartProducts }) {
    const total = cartProducts.reduce((acc, atual) => acc + atual.price*atual.quantity , 0)
    
    return (
        <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
    )
}

export default CartTotal