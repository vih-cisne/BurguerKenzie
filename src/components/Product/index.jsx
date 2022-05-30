import { IoFastFoodOutline } from "react-icons/io5";
import { Button, Card } from './styles.js'


function Product( {product} ) {

    const { name, category , price, img } = product

    return (
        <Card>
            <div><img src={img} alt='Imagem do produto'/></div>
            <h4>{name}</h4>
            <small>{category}</small>
            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</p>
            <Button>Adicionar <IoFastFoodOutline/></Button>
        </Card>
    )
}

export default Product