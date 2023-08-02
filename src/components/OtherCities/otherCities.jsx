import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 23px 30px;
`;
const Title = styled(Typography)`
  text-align: center;
`;

const Cities = [
  {
    id: 2147714,
    name: "Sydney",
    temperature: "17",
    weather: { icon: "10n", main: "Rain" },
  },
  {
    id: 2174003,
    name: "Brisbane",
    temperature: "20",
    weather: { icon: "10n", main: "Rain" },
  },
  {
    id: 2063523,
    name: "Perth",
    temperature: "20",
    weather: { icon: "01d", main: "Clear" },
  },
  {
    id: 2158177,
    name: "Melbourne",
    temperature: "19",
    weather: { icon: "01d", main: "Clear" },
  },
];

function OtherCities({ currentCityId, onCityClick }) {
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
            name={name}
            temperature={temperature}
            weather={weather}
            onClicked={() => onCityClick(id)}
          />
        );
      })}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
