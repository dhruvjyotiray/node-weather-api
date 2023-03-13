module.exports = async (city) => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=7b04f606b883475fb73104457231303&q=${city}&aqi=no`
    );
    const data = await res.json();
  
    return data;
  };