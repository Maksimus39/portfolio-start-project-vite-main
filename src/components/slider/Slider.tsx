import {FlexWrapper} from "../FlexWrapper.ts";
import {S} from "./Slider_Styles.ts"
import * as React from "react";

export const Slider: React.FC = () => {
    return (
        <S.StyledSlider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum laudantium odit
                        perferendis
                        quam! A aperiam architecto commodi, consequatur est eveniet labore perspiciatis, quasi, quidem
                        quo
                        reprehenderit tenetur voluptatibus. Quas.
                    </S.Text>
                    <S.Name>@ Ivan Ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.StyledSlider>
    );
};