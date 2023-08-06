import styled from "styled-components";

const Image = styled.img`
  width: 65px;
  height: 65px;
`;

function ImageIcon() {
  return (
    <Image
      src={`http://openweathermap.org/img/wn/01n.png`}
      alt={"rain"}
    />
  );
}
export default ImageIcon;
