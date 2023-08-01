import styled from "styled-components";
import { Button, Stack } from "@mui/material";
import Name from "./components/Name/Name";
import Temperature from "./components/Temperature/Temperature";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  font-size: 1.5rem;
  text-align:left;
  
`;

function City() {
  return (
    <Stack spacing={2} direction="column">
      <CityList>
        <Name />
        <Temperature />
        <ConditionImage />
      </CityList>
    </Stack>
  );
}
export default City;
