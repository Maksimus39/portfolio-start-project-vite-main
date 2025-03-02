import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

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
                    <Name>Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`


const Text = styled.p``


const Name = styled.span``

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 4px;
        background-color: cadetblue;
    }
`
