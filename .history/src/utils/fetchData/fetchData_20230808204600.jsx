import * as React from "react";



function fetchData (CITY_IDS, cityId, getWeather, getDailyForecast){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    const newTimeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    setTimeoutId(newTimeoutId);

    const weatherPromises = CITY_IDS.map(async (id) => {
      const [weatherData, forecastData] = await Promise.all([
        getWeather(id),
        getDailyForecast(id),
      ]);

      return { id, weatherData, forecastData };
    });

    try {
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
      clearTimeout(newTimeoutId);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      clearTimeout(newTimeoutId);
    }
  }, [CITY_IDS, cityId, getWeather, getDailyForecast]);

  useEffect(() => {
    fetchWeatherData();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fetchWeatherData, timeoutId]);

  return { loading, data, dailyForecast };
};

export default fetchData;
