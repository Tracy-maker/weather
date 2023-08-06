import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import ImageIcon from "../ImageIcons/ImageIcon";

const ForeCastContainer = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DailyBox = styled(Stack)`
  color: #696969;
  
  align-items: center;
  margin-right: 1.5rem;
`;

function Weeks() {
  return (
    <ForeCastContainer>
      <DailyBox spacing={2.3}>
        <Typography>MON</Typography>
        <ImageIcon />
        <Typography variant="body1">19゜</Typography>
      </DailyBox>
      <DailyBox spacing={2.3}>
        <Typography>TUE</Typography>
        <ImageIcon />
        <Typography variant="body1">19゜</Typography>
      </DailyBox>
      <DailyBox spacing={2.3}>
        <Typography>WED</Typography>
        <ImageIcon />
        <Typography variant="body1">19゜</Typography>
      </DailyBox>
      <DailyBox spacing={2.3}>
        <Typography>THU</Typography>
        <ImageIcon />
        <Typography variant="body1">19゜</Typography>
      </DailyBox>
      <DailyBox spacing={2.3}>
        <Typography>FRI</Typography>
        <ImageIcon />
        <Typography variant="body1">19゜</Typography>
      </DailyBox>
    </ForeCastContainer>
  );
}
export default Weeks;
