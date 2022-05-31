import { IoFastFoodOutline } from "react-icons/io5";
import { Button, Card } from './styles.js'


function Product( {product, cartProducts, setCartProducts} ) {

    const { name, category , price, img, id , newImg } = product

    function addToCart() {
        const finded = cartProducts.findIndex((el) => el.id === id)

        if(finded > -1) {
            cartProducts[finded].quantity += 1
            setCartProducts([...cartProducts])
        } else {
            product.quantity = 1
            setCartProducts([product,...cartProducts])
        }

    }


    return (
        <Card>
            <div><img src={newImg} alt='Imagem do produto'/></div>
            <h4>{name}</h4>
            <small>{category}</small>
            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</p>
            <Button onClick={addToCart}>Adicionar <IoFastFoodOutline/></Button>
        </Card>
    )
}

export default Product