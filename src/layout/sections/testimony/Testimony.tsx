import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./../skills/Skills_Styles.ts"
import * as React from "react";
import styled from "styled-components";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"comma"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: thistle;
    min-height: 50vh;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
    
    position: relative;
`