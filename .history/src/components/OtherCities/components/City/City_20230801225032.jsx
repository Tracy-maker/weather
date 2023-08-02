import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  cursor: pointer;
`;

const CityName = styled(Typography)`
  width: 120px;
  color: #696969;
  text-align: left;
  margin-right: 0.5rem;
  font-size:29px
`;

const CityTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

function City({ name, temperature, weather,onClicked }) {
  return (
    <CityList
      onClick={(event) => {
        event.preventDefault();
        onClicked();
      }}
    >
      <CityName >{name}</CityName>
      <CityTemperature>{`${temperature}゜`}</CityTemperature>
      <ConditionImage weather={weather} />
    </CityList>
  );
}
export default City;
