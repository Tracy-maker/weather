import styled from "styled-components";
import { Button, Typography} from "@mui/material";
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

function City() {
  return (
    <CityList>
      <Typography></Typography>
      <Typography></Typography>
      <ConditionImage />
    </CityList>
  );
}
export default City;
