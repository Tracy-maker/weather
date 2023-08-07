import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";
import { useEffect, useState } from "react";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";

const ForeCastContainer = styled(Stack)`
  padding: 28px 37px;
`;
const Title = styled(Typography)`
  padding-bottom: 15px;
`;
const MEL_CITY_ID="2158177";

function Forecast() {
  const [data,setData]=useState();

  useEffect(()=>{
    getDailyForecast(MEL_CITY_ID).then((response)=> console.log(response));
  },[]);

  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      <Weeks />
    </ForeCastContainer>
  );
}

export default Forecast;
