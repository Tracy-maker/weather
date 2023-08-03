import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import City from "./components/City/City";
import { useEffect, useState } from "react";
import getWeather from "../../utils/getWeather/getWeather";

const OtherCitiesContainer = styled(Stack)`
  padding: 28px 35px;
`;
const Title = styled(Typography)`
  text-align: center;
`;



function OtherCities({ currentCityId, onCityClick ,cities}) {
 

  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
      {cities.map(
        ({ id, name, weather: [weather], main: { temp: temperature } }) => {
          if (currentCityId === id) {
            return null;
          }
          return (
            <City
              key={id}
              name={name}
              weather={weather}
              temperature={temperature}
              onClicked={() => onCityClick(id)}
            />
          );
        }
      )}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
