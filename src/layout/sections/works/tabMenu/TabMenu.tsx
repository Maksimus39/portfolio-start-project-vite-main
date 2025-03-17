import {Link} from "../../../../components/Link.ts";
import {S} from "../Works_Styles.ts"
import {TabsItemType} from "../Works.tsx";


type TabMenuItem = {
    status: TabsItemType;
    title: string;
};

type TabMenuProps = {
    tabsItems: TabMenuItem[];
    changeFilterStatus: (value: TabsItemType) => void;
    currentFilterStatus: TabsItemType;
};

export const TabMenu = (props: TabMenuProps) => {

    return (
        <S.StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, i) => {

                        const functionFiltered = () => {
                            props.changeFilterStatus(item.status);
                        }

                        return (
                            <S.ListItem key={i}>
                                <Link href={"#"}
                                      as={"button"}
                                      active={props.currentFilterStatus === item.status}
                                      onClick={functionFiltered}>
                                    {item.title}
                                </Link>
                            </S.ListItem>)
                    }
                )
                }
            </ul>
        </S.StyledTabMenu>
    );
};