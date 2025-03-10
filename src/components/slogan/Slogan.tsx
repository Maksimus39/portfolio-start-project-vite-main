import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.ts";
import {Button} from "../Button.ts";
import {Container} from "../Container.ts";
import {FlexWrapper} from "../FlexWrapper.ts";
import * as React from "react";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Преобразуем идеи в цифровые решения</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: paleturquoise;
`