import Product from "../Product"
import { ContainerProducts, ResultFilter } from './styles.js'

function ProductList({ products, cartProducts, setCartProducts, search, filteredProducts }) {

    
    return !filteredProducts ? (
    
        <ContainerProducts>
            {products?.map((product) => {
                let { id } = product
                let newImg = `id${id}.svg`
                product ={...product, newImg}
                    
                return (< Product product={product} key={id} cartProducts={cartProducts} setCartProducts={setCartProducts}/>)
                
            })}
        </ContainerProducts>

        )
    :   (
        <>
        <ResultFilter>
            <h4>Resultados para:</h4>
            <p>{search}</p>

        </ResultFilter>
        
        <ContainerProducts>
            {filteredProducts.map((product) => {
                let { id } = product
                let newImg = `id${id}.svg`
                product ={...product, newImg}
                    
                return (< Product product={product} key={id} cartProducts={cartProducts} setCartProducts={setCartProducts}/>)
                
            })}
        </ContainerProducts>
        </>

        )
        

}

export default ProductList