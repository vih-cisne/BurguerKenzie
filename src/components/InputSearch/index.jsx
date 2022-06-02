import { FaSearch } from "react-icons/fa";
import { ButtonSearch, Search } from "./styles";



function InputSearch({search, setSearch, products, setFilteredProducts}) {

    function filterProducts(e) {
        
        e.preventDefault()

        function normalize(str) {
            const nStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            console.log(nStr)
            return nStr.toLowerCase()
        }

        const filtered = products.filter((el) => 
        normalize(el.name).includes(normalize(search)) || 
        normalize(el.category).includes(normalize(search)))

        setFilteredProducts(filtered)

    }

    function verifyChange(e) {
        
        setSearch(e.target.value)
        if(e.target.value==='') {
            setFilteredProducts(undefined)
        } 
    }

    return (
        <Search onSubmit={filterProducts}>
        <input onChange={verifyChange} placeholder="Digite para pesquisar"></input>
        <ButtonSearch><FaSearch /></ButtonSearch>
        </Search>
    )

}

export default InputSearch