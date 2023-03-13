module.exports = async (city, forecast) => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=7b04f606b883475fb73104457231303&q=${city}&days=${forecast}&aqi=no&alerts=no`
    );
    const data = await res.json();
  
    return data;
  };