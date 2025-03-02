import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Maxim</Name>
                <SocialIconsList>
                    <SocialItem>
                        <SocialIconList>
                            <Icon iconId={"telegram"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialIconList>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconList>
                            <Icon iconId={"vk"} height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialIconList>
                    </SocialItem>
                </SocialIconsList>
                <Copyright>@ 2024 Maxim Minakov, All Right Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: yellowgreen;
    min-height: 20vh;
`
const Name = styled.span``
const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px
`
const SocialItem = styled.li`

`
const SocialIconList = styled.a``
const Copyright = styled.small``

