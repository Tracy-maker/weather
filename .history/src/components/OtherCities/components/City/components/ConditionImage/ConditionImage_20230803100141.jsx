import { useState } from "react";
import styled from "styled-components";


const Image = styled.img`
  width: 50px;
  height: 50px;
`;

function ConditionImage() {
  const[weather,setWeather]=useState()
  return (
    <Image
      src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
      alt={weather.main}
    />
  );
}
export default ConditionImage;
