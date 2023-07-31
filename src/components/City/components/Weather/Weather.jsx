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


function Weather({temperature,condition,wind,humidity}) {
  

  return (
    <div>
      <Temperature>{`${temperature}゜`}</Temperature>
      <Condition>{condition}</Condition>
      <Details wind={wind} humidity={humidity}/>
    </div>
  );
}
export default Weather;
