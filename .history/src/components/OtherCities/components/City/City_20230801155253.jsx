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
  
  text-align: right;
  color: #696969;
`;

function City() {
  return (
    <CityList>
      <CityName variant="h6">Sydney</CityName>
      <CityTemperature variant="h6">17゜</CityTemperature>
      <ConditionImage />
    </CityList>
  );
}
export default City;
