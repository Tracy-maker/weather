import axios from "axios";
import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";

function getWeather({ cityId }) {
  return axios.get(`${OPEN_WEATHER_MAP_BASE_URL}/weather`, {
    params: { id: cityId, appId: APP_ID, units: 'metric' },
  });
}

export default getWeather;
