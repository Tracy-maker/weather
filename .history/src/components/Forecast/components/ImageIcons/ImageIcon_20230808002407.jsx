import styled from "styled-components";

const Image = styled.img`
  width: 63px;
  height: 63px;
`;

function ImageIcon({weather}) {
  return (
    <Image
      src={`http://openweathermap.org/img/wn/${weather.array.icon}.png`}
      alt={weather.main}
    />
  );
}
export default ImageIcon;
