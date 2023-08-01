import styled from "styled-components";

const Image = styled.image`
width:50px;
height:50px;`

function ConditionImage(){
    return(
        <Image scr="http://openweathermap.org/img/wn/10n.png" alt="Rain"/>
    )
}
export default ConditionImage;