import * as React from "react";
import { styled } from "styled-components";
import City from "./components/City/City";
import OtherCities from "./components/OtherCities/OtherCities";
import Forecast from "./components/Forecast/Forecast";
import { CardActionArea, Container,Box} from "@mui/material";
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
  padding-top:30px;
`;

const ShowCard = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  width: 850px;
  background-color: white;
  border-radius: 45px;
  box-shadow: 0 0 16px rgb(0 0 0 / 90%);
  overflow: hidden;
 
`;
const CardBottom = styled(Box)`
  display: flex;
`;

const DividerLine = styled(Divider)`
  width: 2px;
  background: rgba(225, 225, 225, 0.7);
`;

function App() {
  return (
    <BackgroundCard maxWidth="xl">
      <ShowCard>
        <CardActionArea>
          <City />
          <CardBottom>
            <OtherCities />
            <DividerLine/>
            <Forecast />
          </CardBottom>
        </CardActionArea>
      </ShowCard>
    </BackgroundCard>
  );
}

export default App;