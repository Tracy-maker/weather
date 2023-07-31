import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import getWeather from "../../../../utils/getWeather/getWeather";

const CityName = styled(Box)`
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background-color: white;
  }
`;

function Name() {
  const [name, setName] = useState();

  useEffect(() => {
    getWeather((data) => {
      setName(data.name);
    })
  }, []);

  return <CityName>{name}</CityName>;
}
export default Name;
