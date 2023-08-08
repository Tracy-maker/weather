import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import { CardActionArea, Box, Divider, Stack, Typography } from "@mui/material";
import p1 from "./assets/background1.jpg";
import { useState, useEffect } from "react";
import getWeather from "./utils/getWeather/getWeather";
import getDailyForecast from "./utils/getDailyForecast/getDailyForecast";

const BackgroundCard = styled(Stack)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-image: url(${p1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ShowCard = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 850px;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 0 16px rgb(0 0 0 / 90%);
  overflow: hidden;
`;
const CardBottom = styled(Box)`
  display: flex;
`;

const DividerLine = styled(Divider)`
  width: 5px;
  background: rgba(225, 225, 225, 0.7);
`;

const LoadingData = styled(Typography)`
  text-align: center;
`;

const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

function App() {
  const [cityId, setCityId] = useState(2158177);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    setTimeoutId(newTimeoutId);

    CITY_IDS.forEach((id) => {
      getWeather(id)
        .then((weatherData) => {
          setData((prevData) => ({
            ...prevData,
            [id]: weatherData,
          }));
        })
        .finally(() => {
          clearTimeout(newTimeoutId);
        });
    });

    return () => {
      clearTimeout(newTimeoutId);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false);
      clearTimeout(timeoutId);
    }
  }, [data, timeoutId]);

  useEffect(() => {
    getDailyForecast(cityId)
      .then((response) => {
        setDailyForecast(response.list.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching daily forecast:", error);
      });
  }, []);

  return (
    <BackgroundCard>
      <ShowCard>
        <CardActionArea>
          {loading ? (
            <LoadingData variant="h4">Loading weather data...</LoadingData>
          ) : (
            <City weather={data[cityId]} />
          )}
          <CardBottom>
            <OtherCities
              currentCityId={cityId}
              weathers={Object.values(data)}
              onCityClick={(id) => setCityId(id)}
            />
            <DividerLine />
            <Forecast dailyForecast={dailyForecast}  currentCityId={cityId} />
          </CardBottom>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;
