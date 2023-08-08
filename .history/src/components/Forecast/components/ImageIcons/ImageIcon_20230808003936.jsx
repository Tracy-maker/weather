import styled from "styled-components";

const Image = styled.img`
  width: 63px;
  height: 63px;
`;

function ImageIcon({weather}) {
  return (
    <Image
      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
      alt={weather.main}
    />
  );
}
export default ImageIcon;
