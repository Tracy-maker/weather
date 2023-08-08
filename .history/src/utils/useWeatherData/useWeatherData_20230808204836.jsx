import { useState, useEffect } from "react";

const useWeatherData = (CITY_IDS, cityId, getWeather, getDailyForecast) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);

        const weatherPromises = CITY_IDS.map(async (id) => {
          const [weatherData, forecastData] = await Promise.all([
            getWeather(id),
            getDailyForecast(id),
          ]);

          return { id, weatherData, forecastData };
        });

        const weatherResults = await Promise.all(weatherPromises);
        const newData = {};
        weatherResults.forEach((result) => {
          newData[result.id] = result.weatherData;
        });

        setData(newData);
        setDailyForecast(
          weatherResults
            .find((result) => result.id === cityId)
            ?.forecastData?.list.slice(0, 5) || []
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [CITY_IDS, cityId, getWeather, getDailyForecast]);

  return { loading, data, dailyForecast };
};

export default useWeatherData;
