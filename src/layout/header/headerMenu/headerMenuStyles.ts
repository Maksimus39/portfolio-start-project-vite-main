import {Theme} from "../../../style/Theme.ts";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";


const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${Theme.colors.accent};
    transition: ${Theme.animations.transition};

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
`

// menu
const NavLink = styled(Link)`
    font-family: Josefin Sans, sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: transparent;


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
        transition: ${Theme.animations.transition};
    }

    &:hover, &.active {
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


// mobileMenu
const StyledMobileMenu = styled.nav`
`;
const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease-in-out;


    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        transition: 1s ease-in-out;
    }

    ${(props) => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 40px;
        }
    `}
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


// desktopMenu
const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`;

export const S = {
    NavLink,
    ListItem,
    Mask,
    StyledMobileMenu,
    MobileMenuPopUp,
    BurgerButton,
    StyledDesktopMenu
}