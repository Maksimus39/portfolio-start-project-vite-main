import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import SocialNetworks from "../../assets/images/webp_images/img1.webp"
import Counter from "../../assets/images/webp_images/img2.webp"

const worksItems = ["All", "Landing page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItem={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={"Social networks"}
                      text={"Социальная сеть — это платформа для общения, обмена контентом " +
                          "и взаимодействия с друзьями и сообществами."}
                      src={SocialNetworks}/>
                <Work title={"Counter"}
                      text={"Счётчик — это простое приложение для отслеживания количества событий " +
                          "или объектов с помощью инкрементации и декрементации."}
                      src={Counter}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: dodgerblue;
`

