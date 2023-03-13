const express = require("express");
const app = express();
const port = 3000;
const getWeather = require('./modules/getWeather')
const getForecastWeather = require('./modules/getForecastWeather')
const dataClean = require('./modules/dataClean')
const serverless = require('serverless-http')
const router = express.Router()

app.get("/:city?/:forecast?", async (req, res) => {
  const { city, forecast } = req.params;
  let data = { message: "Enter in format {location}/{forecase}" };
  if (!city) {
    return res
      .status(404)
      .json({ message: "Enter in format {location}/{forecast}" });
  }

  if (city && !forecast) data = await getWeather(city);
  else if (city && forecast) data = await getForecastWeather(city, forecast);
  let cleanedData = dataClean(data, forecast);

  res.status(200).json({ status: "SUCCESS", weather: cleanedData });
});

// app.listen(port, () => {
//   console.log("Weather API running...");
// });

app.use('/netlify/functions/api', router)
module.exports.handler = serverless(app)
