import Details from "./components/Details/Details";
import { styled } from "styled-components";
import { Box } from "@mui/material";

const Temperature = styled(Box)`
  font-size: 5rem;
  @media screen and (min-width: 1024px) {
    margin: 0;
    text-align: center;
    font-size: 5rem;
  }
`;

const Condition = styled(Box)`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
  color: rgb(255, 255, 255, 0.7);
  @media screen and (min-width: 1024px) {
    padding: 0 100px;
  }
`;

function Weather({ temperature, condition, wind, humidity }) {
  return (
    <Box>
      <Temperature>{`${temperature}゜`}</Temperature>
      <Condition>{condition}</Condition>
      <Details wind={wind} humidity={humidity} />
    </Box>
  );
}
export default Weather;
