import Image from "next/image"
import { useState } from "react"

const SearchBar = ({searchedCity, setSearchedCity}) => {

    const [inputCity, setInputCity] = useState('')

    const handleSearch = (city) => {
        setSearchedCity(city)
        console.log(searchedCity)
        return searchedCity
    }

    const handleInputChange = (event) => {
        setInputCity(event.target.value.trim())
        return inputCity
    }


    return (
        <section className="city-searchbar shadow-xl backdrop-blur-sm">
                <input placeholder="Pesquisar por cidade..." type="text" 
                className="focus:outline-none text-xl bg-transparent text-slate-300 city-input"
                value={inputCity} onChange={handleInputChange} />
                <button onClick={() => handleSearch(inputCity)}><Image src="/img/findIcon.png" width={35} height={35} alt="buscar"/></button>
        </section>
    )
}

export default SearchBar