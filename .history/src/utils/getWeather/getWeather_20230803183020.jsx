import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";
import request from "../request/request";

function getWeather(cityId) {
  request('/weather',`id=${cityId}`);
}

export default getWeather;
