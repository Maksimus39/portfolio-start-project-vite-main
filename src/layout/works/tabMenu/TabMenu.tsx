import {Link} from "../../../components/Link.ts";
import {S} from "./../Works_Styles.ts"

type MenuItemProps = {
    menuItem: string[]
}
export const TabMenu = (props: MenuItemProps) => {

    return (
        <S.StyledTabMenu>
            <ul>
                {props.menuItem.map((item, i) => {
                        return (
                            <S.ListItem key={i}>
                                <Link href={"#"}>{item}</Link>
                            </S.ListItem>)
                    }
                )
                }
            </ul>
        </S.StyledTabMenu>
    );
};