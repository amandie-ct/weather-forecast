// API key
const apiKey = '2AzdARmvgru5bQzM76MSDmiMduGca8rN'

// getting city code 
export const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data)
    return data[0].key
};

// getting weather conditions from city code
export const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

