import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts"

const SkillData = [
    {
        iconId: "html_5",
        title: "HTML",
        description: "HTML — это язык разметки для создания веб-страниц и структурирования контента."
    },
    {
        iconId: "css",
        title: "CSS",
        description: "CSS — это язык стилей для оформления HTML-документов и управления их внешним видом."
    },
    {
        iconId: "react",
        title: "React",
        description: "React — это библиотека JavaScript для создания пользовательских интерфейсов с помощью компонентов."
    },
    {
        iconId: "typeScript",
        title: "TypeScript",
        description: "TypeScript — это статически типизированное надмножество JavaScript, улучшающее разработку крупных приложений."
    },
    {
        iconId: "styledComponent",
        title: "Styled Component",
        description: "Styled Components — это библиотека для стилизации React-компонентов с использованием CSS-in-JS."
    }
]


export const Skills = () => {
    return (
        <S.StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {SkillData.map((s, index) => {
                        return (
                            <Skill key={index}
                                   iconId={s.iconId}
                                   title={s.title}
                                   description={s.description}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};