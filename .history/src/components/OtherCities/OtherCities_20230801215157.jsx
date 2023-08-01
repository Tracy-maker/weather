import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import City from "./components/City/City";

const OtherCitiesContainer = styled(Stack)`
  padding: 30px 35px;
`;
const Title = styled(Typography)`
  text-align: center;
`;

const Cities = [
  { id: 0, name: "Sydney", temperature: "17", weather:{icon:'10n',main:'Rain'} },
  { id: 1, name: "Brisbane", temperature: "20", weather:{icon:'10n',main:'Rain'} },
  { id: 2, name: "Perth", temperature: "20" , weather:{icon:'01d',main:'Clear'}},
];

function OtherCities() {
  return (
    <OtherCitiesContainer spacing={1}>
      <Title variant="h6">OTHER CITIES</Title>
      {Cities.map(({ id, name, temperature }) => (
        <City key={id} name={name} temperature={temperature} />
      ))}
    </OtherCitiesContainer>
  );
}
export default OtherCities;
