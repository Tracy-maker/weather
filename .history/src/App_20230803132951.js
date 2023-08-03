import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import { CardActionArea, Container, Box, Divider, Paper, } from "@mui/material";
import p1 from "./assets/background1.jpg";
import { useState } from "react";
import { useEffect } from "react";
import getWeather from "./utils/getWeather/getWeather";

const BackgroundCard = styled(Paper)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-image: url(${p1});
  background-size: cover;
  padding-top: 30px;
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
const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

function App() {
  const [cityId, setCityId] = useState(2158177);
  const [data, setData] = useState({});

  useEffect(() => {
    CITY_IDS.forEach((id) => {
      getWeather(id).then((data) => {
        setData((prevData) => ({
          ...prevData,
          [id]: data,
        }));
      });
    });
  }, []);

  return (
    <BackgroundCard >
      <ShowCard>
        <CardActionArea>
          <City weather={data[cityId]}/>
          <CardBottom>
            <OtherCities
              currentCityId={cityId}
              weathers={Object.values(data)}
              onCityClick={(id) => setCityId(id)}
            />
            <DividerLine />
            <Forecast />
          </CardBottom>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;
