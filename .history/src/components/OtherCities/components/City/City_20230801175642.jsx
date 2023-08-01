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
`;

const CityTemperature = styled(Typography)`
  width: 70px;
  text-align: right;
  color: #696969;
`;

function City({name,temperature}) {
  return (
    <CityList>
      <CityName variant="h6">{name}</CityName>
      <CityTemperature variant="h6">{`${temperature}゜`}</CityTemperature>
      <ConditionImage />
    </CityList>
  );
}
export default City;
