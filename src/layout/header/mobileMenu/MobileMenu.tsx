import styled, {css} from "styled-components";
import {Theme} from "../../../style/Theme.ts";


type MenuItemProps = {
    menuItem: string[]
}
export const MobileMenu = (props: MenuItemProps) => {

    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopUp isOpen={true}>
                <ul>
                    {props.menuItem.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask><span>{item}</span></Mask>
                                <Mask><span>{item}</span></Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopUp>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${Theme.media.tablet} {
        display: block;
    }
`;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${(props) => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};

            position: absolute;
            transform: translateY(-10px);

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.font};

            position: absolute;
            transform: translateY(10px);

            ${(props) => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0px);
                width: 36px;
            `}
        }
    }
`

const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${Theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${Theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(6deg) translateX(5px);

            color: ${Theme.colors.font};

            & + ${Mask} {
                transform: skewX(6deg) translateX(-5px);
            }
        }
    }
`
