import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";

async function getWeather(cityId) {
  
  const response = await fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/weather?id=${cityId}&units=metric&appid=${APP_ID}`
  );
  if (!response.ok) {
    throw new Error(`Weather data not found(${response.status})`);
  }
  return await response.json();
}

export default getWeather;  