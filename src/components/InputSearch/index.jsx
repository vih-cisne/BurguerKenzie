import { FaSearch } from "react-icons/fa";
import { ButtonSearch, Search } from "./styles";



function InputSearch() {

    return (
        <Search>
        <input placeholder="Digite para pesquisar"></input>
        <ButtonSearch><FaSearch /></ButtonSearch>
        </Search>
    )

}

export default InputSearch