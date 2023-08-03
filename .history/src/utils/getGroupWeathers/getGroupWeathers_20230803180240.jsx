import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";

function getGroupWeathers(cityId) {

  fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/weather?id=${cityId}&units=metric&appid=${APP_ID}`
  ).then(onResponse);
}

export default getGroupWeathers;