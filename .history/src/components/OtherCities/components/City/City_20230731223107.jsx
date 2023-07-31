import styled from "styled-components";
import { Button, Stack } from "@mui/material";
import Name from "./components/Name/Name";
import Temperature from "./components/Temperature/Temperature";
import ConditionImage from "./components/ConditionImage/ConditionImage";

const CityList = styled(Button)`
  display: flex;
  font-size: 1rem;
  padding: 0;
`;

function City() {
  return (
    <Stack>
      <CityList variant="text">
        <Name />
        <Temperature />
        <ConditionImage />
      </CityList>
    </Stack>
  );
}
export default City;
