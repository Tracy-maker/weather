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
const MEL_CITY_ID = "2158177";
const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
function Forecast({ weathers }) {
  const dayInAWeek = new Date().getDay();
  const startIndex = dayInAWeek % 7;
  const forecastDays = WEEK_DAYS.slice(startIndex, startIndex + 5);

  console.log(forecastDays);

  const [data, setData] = useState();

  useEffect(() => {
    getDailyForecast(MEL_CITY_ID).then((response) => console.log(response));
  }, []);

  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      <Weeks weather={weathers} forecastDays={forecastDays} />
    </ForeCastContainer>
  );
}

export default Forecast;
