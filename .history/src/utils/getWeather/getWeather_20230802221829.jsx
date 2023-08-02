function getWeather(cityId, onError) {
  const appId = "1bf06f9e357bb376f67992e64e38314c";

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`
  )
    .then((response) => {
      if (!response.ok) {
        onError(response);
      }
      return response.json();
    })
}

export default getWeather;
