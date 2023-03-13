Weather API

This is a simple weather API built with Node.js and Express.js that returns weather data for a given location. It uses the OpenWeatherMap API to fetch weather data and provides the user with the current weather or a forecast for the next few days depending on the user's input.

Endpoints
There is only one endpoint available:

GET /:city?/:forecast?

city: The name of the city for which the user wants weather data. This parameter is required.
forecast: An optional parameter that, if included, returns a weather forecast for the next few days. If omitted, the API returns the current weather.
The API returns a JSON object containing the weather data for the specified location. If the location cannot be found or there is an error with the API request, the API returns an error message.