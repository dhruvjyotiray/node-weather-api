module.exports = (data, exists) => {
    let { location, current } = data;
    let area = location.name;
    let country = location.country;
    let temp = current.temp_c;
    let condition = current.condition.text;
  
    let cleanedValue = {
      location: `${area}, ${country}`,
      temperature: `${temp}°C`,
      condition: condition,
    };
  
    if (exists) {
      cleanedValue.forecast = [];
      let forecastArr = data.forecast.forecastday;
      for (let i = 1; i < forecastArr.length; i++) {
        let currForecast = {};
        currForecast.Date = forecastArr[i].date;
        currForecast.AverageTemperature = `${forecastArr[i].day.avgtemp_c}°C`;
        currForecast.MinTemperature = `${forecastArr[i].day.mintemp_c}°C`;
        currForecast.MaxTemperature = `${forecastArr[i].day.maxtemp_c}°C`;
        currForecast.Condition = forecastArr[i].day.condition.text;
        cleanedValue.forecast.push(currForecast);
        currForecast = {};
      }
    }
    return cleanedValue;
  };