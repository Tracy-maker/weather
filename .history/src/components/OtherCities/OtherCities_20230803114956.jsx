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

const Cities = [
  {
    id: 2147714
  },
  {
    id: 2174003,
  },
  {
    id: 2063523,
  },
  {
    id: 2158177,
  },
];

function OtherCities({ currentCityId, onCityClick }) {

  const [data, setData] = useState();
  useEffect(() => {
    getWeather(id).then(setData);
  }, [id]);

  if (!data) {
    return null;
  }


  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
      {Cities.map(({ id, name, temperature, weather }) => {
        if (currentCityId === id) {
          return null;
        }
        return (
          <City
            key={id}
            onClicked={() => onCityClick(id)}
          />
        );
      })}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
