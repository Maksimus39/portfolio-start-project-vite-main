import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import SocialNetworks from "../../assets/images/webp_images/img1.webp"
import Counter from "../../assets/images/webp_images/img2.webp"
import { Container } from "../../components/Container.ts";

const worksItems = ["All", "Landing page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItem={worksItems}/>
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={'wrap'}>
                    <Work title={"Social Networks"}
                          text={"Социальная сеть — это платформа для общения, обмена контентом " +
                              "и взаимодействия с друзьями и сообществами."}
                          src={SocialNetworks}/>
                    <Work title={"Counter"}
                          text={"Счётчик — это простое приложение для отслеживания количества событий " +
                              "или объектов с помощью инкрементации и декрементации."}
                          src={Counter}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

