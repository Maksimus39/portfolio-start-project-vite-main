import styled from "styled-components";
import {Theme} from "../style/Theme.ts";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    width: 170px;
    height: 32px;
    text-transform: uppercase;
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${Theme.colors.accent};
        transition: ${Theme.animations.transition};

        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }
`

