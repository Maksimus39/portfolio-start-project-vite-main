import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>Преобразуем идеи в цифровые решения</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: paleturquoise;
`
