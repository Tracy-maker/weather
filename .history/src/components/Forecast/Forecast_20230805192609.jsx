import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import Weeks from "./components/Weeks/Weeks";

const ForeCastContainer = styled(Stack)`
  padding: 28px 35px;
`;
const Title = styled(Typography)`

  padding-bottom: 10px;
`;

function Forecast() {
  return (
    <ForeCastContainer>
      <Title variant="h6">FORECAST</Title>
      <Weeks />
    </ForeCastContainer>
  );
}

export default Forecast;
