import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";
import onResponse from "../onResponse/onResponse";

function getGroupWeathers(cityIds) {

  fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/weather?id=${cityIds.join()}&units=metric&appid=${APP_ID}`
  ).then(onResponse);
}

export default getGroupWeathers;