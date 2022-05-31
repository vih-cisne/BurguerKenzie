import Product from "../Product"
import { ContainerProducts } from './styles.js'

function ProductList({ products, cartProducts, setCartProducts}) {
    
    
    return (
        <ContainerProducts>
            {products.map((product) => {
                let { id } = product
                let newImg = `id${id}.svg`
                product ={...product, newImg}
                    
                return (< Product product={product} key={id} cartProducts={cartProducts} setCartProducts={setCartProducts}/>)
                
            })}
        </ContainerProducts>
    )

}

export default ProductList