import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Theme} from "../../style/Theme.ts";
import {font} from "../../style/Common.ts";

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
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 40px;
`
const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`
const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialIconList = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${Theme.colors.accent};

    &:hover {
        color: ${Theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`


const Copyright = styled.small`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

