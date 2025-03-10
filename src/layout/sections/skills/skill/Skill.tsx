import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {S} from "./../Skills_Styles.ts"


type SkillProps = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillProps) => {
    const {iconId, title, description} = props;
    return (
        <S.StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{description}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};