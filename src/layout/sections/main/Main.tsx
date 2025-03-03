import myPhoto from "../../../assets/images/webp_images/myFoto.webp";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../style/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi there</SmallText>
                        <Name>I am <span>Maxim Minakov</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>

                    <PhotoWrapper>
                        <Photo src={myPhoto} alt="myPhoto"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: azure;
    display: flex;
`

const MainTitle = styled.h1`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 27px;
    letter-spacing: 0%;
`
const Name = styled.h2`
    font-family: Josefin Sans, sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const SmallText = styled.h2`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
`

const PhotoWrapper=styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        
        position: absolute;
        top:-24px;
        left: 24px;
        z-index: -1;
    }
`



