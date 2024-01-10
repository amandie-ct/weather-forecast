import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";

export default function Home() {
  return (
    <main className="main-info">
      <Main />
      <section className="details-searchbar">
      <SearchBar />
      <WeatherDetails />
      </section>
    </main>

  )
}
