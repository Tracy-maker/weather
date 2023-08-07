import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";

function getDailyForecast(cityId) {
  
  return fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/forecast/daily?id=${cityId}&units=metric&appid=${APP_ID}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Weather data not found(${response.status})`);
      }
      return response.json();
    })
}

export default getDailyForecast;  