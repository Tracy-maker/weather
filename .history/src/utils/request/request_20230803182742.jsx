import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";

function request({ url, query }) {
  fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/${url}?${query}&units=metric&appid=${APP_ID}`
  ).then(onResponse);
}
export default request;
