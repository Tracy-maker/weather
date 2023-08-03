import request from "../request/request";

function getWeather({ cityId }) {
  return request({
    path: "/weather",
    query: { id: cityId },
  });
}

export default getWeather;



