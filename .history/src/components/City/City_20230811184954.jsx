import Weather from "./components/Weather/Weather";
import Name from "./components/Name/Name";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import p2 from "../../assets/background2.jpg";

const CardContentTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 64px 0px;
  background-image: url(${p2});
  background-size: cover;
  over-flow: hidden;
  color: white;
  position: relative;
  @media screen and (min-width: 1024px){
    flex-direction: row;
    padding: 64px 50px;
  }
`;
const Strip = styled(Box)`
  height: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
function City({weather}) {
 
  return (
    <CardContentTop>
      {weather && (
        <>
          <Weather
            temperature={weather.main.temp}
            condition={weather.weather[0].main}
            humidity={weather.main.humidity}
            wind={weather.wind.speed}
          />
          <Name name={weather.name} />
        </>
      )}
      <Strip />
    </CardContentTop>
  );
}
export default City;
