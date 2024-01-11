// API key
const apiKey = '2AzdARmvgru5bQzM76MSDmiMduGca8rN'

// base URL
const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'

async function getCityCode(city) {
  const response = await fetch(`${baseUrl}?apiKey=${apiKey}&q=${city}`)
  return response.json()
}

