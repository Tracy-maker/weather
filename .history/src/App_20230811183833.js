import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import { CardActionArea, Box, Divider, Stack } from "@mui/material";
import p1 from "./assets/background1.jpg";
import { useState, useEffect } from "react";
import getWeather from "./utils/getWeather/getWeather";
import getDailyForecast from "./utils/getDailyForecast/getDailyForecast";
import Typewriter from "typewriter-effect";

const BackgroundCard = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-image: url(${p1});
  background-size: cover;
  background-repeat: no-repeat;
  }
`;

const ShowCard = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 0 16px rgb(0 0 0 / 90%);
  overflow: hidden;
`;
const CardBottom = styled(Box)`
  display: flex;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 30px 0;
  }
`;

const DividerLine = styled(Divider)`
  width: 5px;
  background: rgba(225, 225, 225, 0.7);
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const LoadingData = styled(Box)`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  color: white;
`;

const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

function App() {
  const [cityId, setCityId] = useState(2158177);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResults = await Promise.all(
          CITY_IDS.map(async (id) => ({
            id,
            weatherData: await getWeather(id),
            forecastData: await getDailyForecast(id),
          }))
        );
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
    fetchData();
  }, [cityId]);

  return (
    <BackgroundCard>
      {loading ? (
        <LoadingData>
          <Typewriter
            options={{
              strings: ["Loading Weather Data......"],
              autoStart: true,
              loop: true,
            }}
          />
        </LoadingData>
      ) : (
        <ShowCard>
          <CardActionArea>
            <City weather={data[cityId]} />
            <CardBottom>
              <OtherCities
                currentCityId={cityId}
                weathers={Object.values(data)}
                onCityClick={(id) => setCityId(id)}
              />
              <DividerLine />
              <Forecast dailyForecast={dailyForecast} currentCityId={cityId} />
            </CardBottom>
          </CardActionArea>
        </ShowCard>
      )}
    </BackgroundCard>
  );
}

export default App;
