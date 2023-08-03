import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "../../config";

async function getGroupWeathers(cityId) {
  const appId = "1bf06f9e357bb376f67992e64e38314c";

  try {
    const response = await fetch(
      `${OPEN_WEATHER_MAP_BASE_URL}/weather?id=${cityId}&units=metric&appid=${APP_ID}`
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

export default getGroupWeathers;