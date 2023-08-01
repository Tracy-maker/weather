import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

function ConditionImage({weather}) {
  return (
    <Image
      src="http://openweathermap.org/img/wn/${weather.icon}.png"
      alt="Rain"
    />
  );
}
export default ConditionImage;
