import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import getWeather from "../../../../utils/getWeather/getWeather";

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

  useEffect(() => {
    getWeather((data)=>{
      setTemperature(data.main.temp)
      setCondition(data.weather[0].main)
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
