import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Name from "./components/Name/Name";
import Temperature from "./components/Temperature/Temperature";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  font-size: 1.5rem;
  text-align: left;
  background: transparent;
  border: 0;
  padding: 0;
`;

const CityName = styled(Typography)`
  width: 120px;
`;

function City() {
  return (
    <CityList>
      <CityName>Sydney</CityName>
      <Typography>17゜</Typography>
      <ConditionImage />
    </CityList>
  );
}
export default City;
