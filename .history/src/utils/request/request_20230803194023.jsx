import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";

function request({ path, query }) {
  const url = new URL(`${OPEN_WEATHER_MAP_BASE_URL}${path}`);
  url.searchParams.append("units", "metric");
  url.searchParams.append("appid", APP_ID);

  if (query) {
    for (const key in query) {
      url.searchParams.append(key, query[key]);
    }
  }

  return fetch(url).then(response){;
  if (!response.ok) {
    throw response;
  }
  return response.json()}
}

export default request;
