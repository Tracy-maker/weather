import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Box)`
  display: flex;
  justify-content: center; 
  align-items: center; 
  cursor: pointer;
`;

const CityName = styled(Typography)`
  width: 120px;
  color: #696969;
  text-align: left;
  margin-right: 0.5rem;
  font-size: 29px;
`;

const CityTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

const Icon=styled(ConditionImage)`
text-align: right;
`

function City({ name, temperature, weather, onClicked }) {
  return (
    <CityList
      onClick={(event) => {
        event.preventDefault();
        onClicked();
      }}
    >
      <CityName variant="subtitle1">{name}</CityName>
      <CityTemperature variant="body1">{`${temperature}゜`}</CityTemperature>
      <ConditionImage weather={weather} />
    </CityList>
  
  );
}
export default City;
