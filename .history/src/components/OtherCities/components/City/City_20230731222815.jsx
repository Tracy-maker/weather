import styled from "styled-components";
import { Button } from "@mui/material";
import Name from "./components/Name/Name";
import Temperature from "./components/Temperature/Temperature";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  border: 0;

`;

function City() {
  return <CityList variant="text"><Name/><Temperature/><ConditionImage/></CityList>;
}
export default City;
