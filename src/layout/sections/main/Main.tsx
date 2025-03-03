import myPhoto from "../../../assets/images/webp_images/myFoto.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi there</span>
                    <Name>I am Maxim Minakov</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={myPhoto} alt="myPhoto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: azure;
`

const MainTitle = styled.h1`
   // color: darkblue;
`
const Name = styled.h2`
   //  color: darkblue;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`



