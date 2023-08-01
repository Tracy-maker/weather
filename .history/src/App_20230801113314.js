import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Container } from "@mui/material";
import p1 from "./assets/background1.jpg";

const BackgroundCard = styled(Container)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-image: url(${p1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ShowCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 850px;
  height: 680px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
`;
const CardBottom = styled(CardContent)`
  display: flex;
`;

function App() {
  return (
    <BackgroundCard maxWidth="xl">
      <ShowCard>
        <CardActionArea>
          <City />
          <CardBottom>
            <OtherCities />
            <Forecast />
          </CardBottom>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;
