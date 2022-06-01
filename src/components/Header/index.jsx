import InputSearch from "../InputSearch"
import Logo from "../Logo"
import { HeaderStyle } from "./styles";


function Header({ search, setSearch, products, setFilteredProducts }) {
    return (
        <HeaderStyle>
            <Logo /> 
            <InputSearch search={search} setSearch={setSearch} products={products} setFilteredProducts={setFilteredProducts}/>
       </HeaderStyle>
    )
}

export default Header