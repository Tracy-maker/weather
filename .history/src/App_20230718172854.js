import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/city";
import OtherCities from "./components/OtherCities/otherCities";
import Forecast from "./components/Forecast/forecast";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Container } from "@mui/material";
import pic1 from './assets/weatherBackground.jpg'
import pic2 from './assets/background1.jpg'

const BackgroundCard = styled(Container)`
height: 100vh;
width: 100%;
display: flex;
align-items: stretch;
justify-content: center;
background-image: url(${pic1});
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
`;

const ShowCard = styled(Card)`
  width: 800px;
  height: 600px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 /50%);
`;

function App() {
  return (
    <BackgroundCard maxWidth="xl">
      <ShowCard>
        <CardActionArea>
          <City />
          <CardContent>
            <OtherCities />
            <Forecast />
          </CardContent>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;
