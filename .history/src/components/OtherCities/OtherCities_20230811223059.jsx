import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 28px 35px;
  @media screen and (min-width: 1024px) {
   
      padding: 20px 48px;
      border: 0;
    }
`;
const Title = styled(Typography)`
  text-align: center;
`;

function OtherCities({ currentCityId, onCityClick ,weathers}) {
  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
      {weathers.map(
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
