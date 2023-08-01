import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

function ConditionImage() {
  return (
    <Image
      src="http://openweathermap.org/img/wn/04n.png"
      alt="Rain"
    />
  );
}
export default ConditionImage;
