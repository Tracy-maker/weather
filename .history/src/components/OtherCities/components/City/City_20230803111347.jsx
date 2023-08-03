import styled from "styled-components";
import { Paper, Typography } from "@mui/material";
import ConditionImage from "./components/ConditionImage/ConditionImage";
import { useEffect, useState } from "react";
import getWeather from "../../../../utils/getWeather/getWeather";

const CityList = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CityName = styled(Typography)`
  width: 120px;
  color: #696969;
  text-align: left;
  margin-right: 0.5rem;
  font-size: 29px;
`;

const CityTemperature = styled(Typography)`
  width: 4rem;
  text-align: right;
  color: #696969;
`;

function City({ id, name, temperature, weather, onClicked }) {
  const [data, setData] = useState();
  useEffect(() => {
    getWeather(id).then(setData);
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <CityList
      elevation={0}
      onClick={(event) => {
        event.preventDefault();
        onClicked();
      }}
    >
      <CityName variant="subtitle1">{name}</CityName>
      <CityTemperature variant="body1">{`${temperature}゜`}</CityTemperature>
      <ConditionImage cityId={id} weather={weather} />
    </CityList>
  );
}
export default City;
