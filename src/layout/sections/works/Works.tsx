import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import SocialNetworks from "../../../assets/images/webp_images/img1.webp"
import Counter from "../../../assets/images/webp_images/img2.webp"
import {Container} from "../../../components/Container.ts";
import {S} from "./Works_Styles.ts"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export type TabsItemType = "All" | "Landing" | "React" | "SPA"
type ArrayDataType = Array<{ status: TabsItemType, title: string }>

const tabsItems: ArrayDataType = [
    {title: "All", status: "All"},
    {title: "Landing page", status: "Landing"},
    {title: "React", status: "React"},
    {title: "SPA", status: "SPA"}
]

const WorkData = [
    {
        id: 1,
        title: "Social Networks",
        text: "Социальная сеть — это платформа для общения, обмена контентом " +
            "и взаимодействия с друзьями и сообществами.",
        src: SocialNetworks,
        type: "SPA"
    },
    {
        id: 2,
        title: "Counter",
        text: "Счётчик — это простое приложение для отслеживания количества событий " +
            "или объектов с помощью инкрементации и декрементации.",
        src: Counter,
        type: "React"
    }
]


export const Works = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsItemType>("All")

    let filteredWorks = WorkData

    if (currentFilterStatus === "Landing") {
        filteredWorks = WorkData.filter(work => work.type === "Landing")
    }
    if (currentFilterStatus === "React") {
        filteredWorks = WorkData.filter(work => work.type === "React")
    }
    if (currentFilterStatus === "SPA") {
        filteredWorks = WorkData.filter(work => work.type === "SPA")
    }

    const changeFilterStatus = (value: "All" | "Landing" | "React" | "SPA") => {
        setCurrentFilterStatus(value)
    }

    return (
        <S.StyledWorks id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={'wrap'}>

                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}

                                            layout={true}
                                            key={w.id}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                >
                                    <Work key={w.id}
                                          title={w.title}
                                          text={w.text}
                                          src={w.src}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.StyledWorks>
    );
};

