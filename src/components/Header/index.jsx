import InputSearch from "../InputSearch"
import Logo from "../Logo"
import { HeaderStyle } from "./styles";


function Header() {
    return (
        <HeaderStyle>
            <Logo /> 
            <InputSearch />
       </HeaderStyle>
    )
}

export default Header