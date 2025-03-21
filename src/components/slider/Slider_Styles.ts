import styled from "styled-components";
import {Theme} from "../../style/Theme.ts";

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p``
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;

    margin: 22px 0 32px;
    display: inline-block;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        background-color: ${Theme.colors.bulletsColor};

        & + span {
            margin-left: 5px;
        }

        &:active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`

export const S = {
    StyledSlider,
    Slide,
    Text,
    Name,
    Pagination
}