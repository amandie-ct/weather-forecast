import { useEffect, useState } from "react"
import { getCity } from '../../api'

const SearchBar = ({searchedCity, setSearchedCity}) => {

    const [location, setLocation] = useState('')

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            getCity(location)
        }, 1000)
        return () => clearTimeout(debounceSearch)
    }, [location])
    
    return (
        <section className="city-searchbar shadow-xl backdrop-blur-sm">
                <input placeholder="Pesquisar por cidade..." type="text" 
                className="focus:outline-none text-xl bg-transparent text-slate-300 city-input"
                onChange={e => setLocation(e.target.value.trim())}
                />
        </section>
    )
}

export default SearchBar