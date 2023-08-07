import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import { CardActionArea, Box, Divider, Stack } from "@mui/material";
import p1 from "./assets/background1.jpg";
import { useState } from "react";
import { useEffect } from "react";
import getWeather from "./utils/getWeather/getWeather";

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
const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

function App() {
 
  const [cityId, setCityId] = useState(2158177);
  const [data, setData] = useState({});
  const [loading,setLoading]=useState(true);
  const [timeoutId,setTimeoutId]=useState(null);

  useEffect(()=>{
    const newTimeoutId= setTimeout(()=>{
      setLoading(false);
    },1000);

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
          clearTimeout(newTimeoutId); // Clear the timeout when data is fetched
        });
    });

    return () => {
      clearTimeout(newTimeoutId); // Cleanup: Clear the timeout if the component unmounts
    };
  }, []);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false);
      clearTimeout(timeoutId); // Clear the timeout when data is loaded
    }
  }, [data, timeoutId]);

  // ... (rest of your code)

  return (
    <BackgroundCard>
      <ShowCard>
        <CardActionArea>
        {loading ? <p>Loading...</p> : null}
          <City weather={data[cityId]} />
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
