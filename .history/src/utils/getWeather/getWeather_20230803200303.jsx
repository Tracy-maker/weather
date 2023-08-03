async function getWeather(cityId) {
  const appId = "1bf06f9e357bb376f67992e64e38314c";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`
    );

    if (!response.ok) {
      throw response;
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export default getWeather;