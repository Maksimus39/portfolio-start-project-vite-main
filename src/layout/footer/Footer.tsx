import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_Styles.ts"


const SocialItemsData = [
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    }
]

export const Footer = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Maxim</S.Name>
                <S.SocialIconsList>
                    {SocialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialIconList>
                                    <Icon
                                        iconId={s.iconId}
                                        height={"21px"}
                                        width={"21px"}
                                        viewBox={"0 0 21px 21px"}/>
                                </S.SocialIconList>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialIconsList>
                <S.Copyright>@ 2024 Maxim Minakov, All Right Reserved.</S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};
