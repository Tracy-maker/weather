function getWeather = async () => {
    const cityId = 2158177;
    const appId = "1bf06f9e357bb376f67992e64e38314c";

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`
      );
      setTemperature(response.data.main.temp);
      setCondition(response.data.weather[0].main);
    } catch (error) {
      console.log('Error fetching weather data:',error);
    }
  };

export default getWeather;