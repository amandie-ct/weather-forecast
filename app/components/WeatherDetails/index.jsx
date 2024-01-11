const WeatherDetails = () => {

    return (
        <section className="forecast">
            <h2 className="text-6xl font-bold text-neutral-400 ">Local</h2>
            <h1 className="text-8xl text-slate-300 ">Temperatura &deg; C</h1>
            <div className="forecast-div"><h3 className="text-4xl text-neutral-400 ">Nome da previsão</h3><img src="img/partly-cloudy-day-haze.svg" alt="ícone da previsão do tempo" /></div>
        </section>
    )
}

export default WeatherDetails