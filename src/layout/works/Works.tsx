import {SectionTitle} from "../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import SocialNetworks from "../../assets/images/webp_images/img1.webp"
import Counter from "../../assets/images/webp_images/img2.webp"
import {Container} from "../../components/Container.ts";
import {S} from "./Works_Styles.ts"


const worksItems = ["All", "Landing page", "React", "SPA"]

const WorkData = [
    {
        title: "Social Networks",
        text: "Социальная сеть — это платформа для общения, обмена контентом " +
            "и взаимодействия с друзьями и сообществами.",
        src: SocialNetworks
    },
    {
        title: "Counter",
        text: "Счётчик — это простое приложение для отслеживания количества событий " +
            "или объектов с помощью инкрементации и декрементации.",
        src: Counter
    }
]


export const Works = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItem={worksItems}/>
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={'wrap'}>
                    {WorkData.map((w, index) => {
                        return (
                            <Work key={index}
                                  title={w.title}
                                  text={w.text}
                                  src={w.src}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};

