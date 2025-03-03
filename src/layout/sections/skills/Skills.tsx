import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"html_5"}
                           title={"HTML"}
                           description={"HTML — это язык разметки для создания веб-страниц и структурирования контента."}/>

                    <Skill iconId={"css"}
                           title={"CSS"}
                           description={"CSS — это язык стилей для оформления HTML-документов и управления их внешним видом."}/>
                    <Skill iconId={"react"}
                           title={"React"}
                           description={"React — это библиотека JavaScript для создания пользовательских интерфейсов с помощью компонентов."}/>
                    <Skill iconId={"typeScript"}
                           title={"TypeScript"}
                           description={"TypeScript — это статически типизированное надмножество JavaScript, улучшающее разработку крупных приложений."}
                    />
                    <Skill iconId={"styledComponent"}
                           title={"Styled Component"}
                           description={"Styled Components — это библиотека для стилизации React-компонентов с использованием CSS-in-JS."}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
   
`