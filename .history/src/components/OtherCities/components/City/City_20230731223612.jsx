import styled from "styled-components";
import { Button, Stack } from "@mui/material";
import Name from "./components/Name/Name";
import Temperature from "./components/Temperature/Temperature";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  font-size: 1rem;
  text-transform:none
`;

function City() {
  return (
    <Stack spacing={2} direction="column">
      <CityList variant="text">
        <Name />
        <Temperature />
        <ConditionImage />
      </CityList>
    </Stack>
  );
}
export default City;
