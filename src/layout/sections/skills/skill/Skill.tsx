import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";


type SkillProps = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillProps) => {
    const {iconId, title, description} = props;
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(240, 248, 255, 0.43);
    margin: 10px;
`

const SkillTitle = styled.h3``

const SkillText = styled.p``
