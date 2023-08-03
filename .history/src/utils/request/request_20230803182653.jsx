function request({ url, query }) {
  fetch(
    `${OPEN_WEATHER_MAP_BASE_URL}/${url}?${query}&units=metric&appid=${APP_ID}`
  );
}
export default request;
