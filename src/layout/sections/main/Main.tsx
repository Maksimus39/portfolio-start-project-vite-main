import myPhoto from "../../../assets/images/webp_images/myFoto.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from "./Main_Styles.ts"

export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi there</S.SmallText>
                        <S.Name>I am <span>Maxim Minakov</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={myPhoto} alt="myPhoto"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


