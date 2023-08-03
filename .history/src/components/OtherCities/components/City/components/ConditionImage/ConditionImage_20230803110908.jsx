import { useEffect, useState } from "react";
import styled from "styled-components";
import getWeather from "../../../../../../utils/getWeather/getWeather";

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

function ConditionImage({ cityId,weather }) {
 
  return (
    <Image
      src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
      alt={weather.main}
    />
  );
}
export default ConditionImage;
