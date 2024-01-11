'use client'
import { useState } from "react"
import Main from "./components/Main"
import SearchBar from "./components/SearchBar"
import WeatherDetails from "./components/WeatherDetails"

export default function Home() {

const [searchedCity, setSearchedCity] = useState('')

  return (
    <main className="main-info">
      <Main />
      <section className="details-searchbar">
      <SearchBar searchedCity={searchedCity} setSearchedCity={setSearchedCity} />
      <WeatherDetails />
      </section>
    </main>

  )
}
