import Product from "../Product"
import { ContainerProducts } from './styles.js'

function ProductList({ products }) {
    
    return (
        <ContainerProducts>
            {products.map((product) => {
                let { id, img } = product
                img = `id${id}.svg`
                product={...product, img}
                    
                return (< Product product={product} key={id}/>)
                
            })}
        </ContainerProducts>
    )

}

export default ProductList