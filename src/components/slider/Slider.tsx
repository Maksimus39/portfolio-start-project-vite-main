import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Theme} from "../../style/Theme.ts";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum laudantium odit
                        perferendis
                        quam! A aperiam architecto commodi, consequatur est eveniet labore perspiciatis, quasi, quidem
                        quo
                        reprehenderit tenetur voluptatibus. Quas.
                    </Text>
                    <Name>@ Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    max-width: 500px;
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

    margin: 22px 0 42px;
    display: inline-block;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        border-radius: 20px;
        background-color: ${Theme.colors.bulletsColor};

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`
