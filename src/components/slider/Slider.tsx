import {S} from "./Slider_Styles.ts"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import * as React from "react";
import "./../../style/slider.css"


type SliderProps = {
    text: string
    userName: string
}

const Slide = (props: SliderProps) => {
    const {text, userName} = props;

    return (
        <S.Slide>
            <S.Text>{text}</S.Text>
            <S.Name>{userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide text={"Отличное приложение! Интуитивно понятный интерфейс, " +
        "быстрая работа, рекомендую всем."}
           userName={"@ Иван Иванов"}/>,

    <Slide text={
        "Приложение просто потрясающее! Быстрое, удобное и функциональное." +
        " Помогает мне в повседневных задачах, рекомендую всем друзьям. — Анна Петрова"}
           userName={"@ Сергей Сергеевич"}
    />,
    <Slide text={"Приложение просто потрясающее! Быстрое, удобное и функциональное." +
        " Помогает мне в повседневных задачах, рекомендую всем друзьям. — Анна Петрова"}
           userName={"@ Максим Максимович"}
    />
];

export const Slider: React.FC = () => (
    <S.StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.StyledSlider>

);