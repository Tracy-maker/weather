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

const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

function OtherCities({ currentCityId, onCityClick }) {
  
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

  if (!data) {
    return null;
  }

  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
      {CITY_IDS.map(({ id, name, temperature, weather }) => {
        if (currentCityId === id) {
          return null;
        }
        return <City key={id} onClicked={() => onCityClick(id)} />;
      })}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
