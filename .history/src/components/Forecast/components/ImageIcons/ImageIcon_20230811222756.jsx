import styled from "styled-components";

const Image = styled.img`
  width: 63px;
  height: 63px;
  @media screen and (min-width: 1024px) {
    .icon {
      width: 70px;
    }
`;

function ImageIcon({weather}) {
  return (
    <Image
      src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
      alt={weather.main}
    />
  );
}
export default ImageIcon;
