import request from "../request/request";

function getWeather(cityId) {
  request('/weather',`id=${cityId}`);
}

export default getWeather;
