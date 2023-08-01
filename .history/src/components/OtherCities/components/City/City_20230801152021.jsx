import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
`;

const CityName = styled(Typography)`
  width: 120px;
`;

function City() {
  return (
    <CityList>
      <CityName variant="h6">Sydney</CityName>
      <Typography>17゜</Typography>
      <ConditionImage />
    </CityList>
  );
}
export default City;
