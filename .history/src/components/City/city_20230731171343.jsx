import Weather from "./components/Weather/Weather";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import p2 from "../../assets/background2.jpg";
import { useEffect, useState } from "react";
import getWeather from "../../utils/getWeather/getWeather";

const CardContentTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  padding: 64px 96px;
  background-image: url(${p2});
  background-size: cover;
  color: white;
  position: relative;
`;

const Strip = styled(Box)`
  height: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

function City() {

  const [temperature, setTemperature] = useState();
  const [condition, setCondition] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [name, setName] =useState();

  useEffect(() => {
    getWeather((data)=>{
      setTemperature(data.main.temp)
      setCondition(data.weather[0].main)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setName(data.name)
    });
  }, []);

  return (
    <CardContentTop>
      <Weather temperature={temperature} condition={condition} humidity={humidity} wind={wind}/>
      <Name name={name}/>
      <Strip />
    </CardContentTop>
  );
}
export default City;
