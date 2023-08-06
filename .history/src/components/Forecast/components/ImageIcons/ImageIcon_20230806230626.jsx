import styled from "styled-components";

const Image = styled.img`
  width: 60px;
  height: 60px;
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
