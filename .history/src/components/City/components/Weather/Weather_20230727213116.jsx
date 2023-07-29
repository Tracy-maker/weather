import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const Temperature = styled(Box)`
  font-size: 5rem;
`;

const Condition = styled(Box)`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
  color: rgb(255, 255, 255, 0.7);
`;

function Weather() {
  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();

  const getWeather = async () => {

    const cityId = 2158177;
    const appId = "1bf06f9e357bb376f67992e64e38314c";

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`
    );
    console.log(response)
  };

  useEffect(() => {
    getWeather((data) => {
      setTemperature(data.main.temp);
      setCondition(data.weather[0].main);
    });
  }, []);

  return (
    <div>
      <Temperature>{`${temperature}゜`}</Temperature>
      <Condition>{condition}</Condition>
      <Details />
    </div>
  );
}
export default Weather;
