import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  font-size: 1.5rem;
  text-align: left;
  padding: 0;
  align-item:center;
  cursor:pointer;
 
`;

const CityName = styled(Typography)`
  width: 120px;
`;

function City() {
  return (
    <CityList >
      <CityName variant="h6">Sydney</CityName>
      <Typography>17゜</Typography>
      <ConditionImage />
    </CityList>
  );
}
export default City;
