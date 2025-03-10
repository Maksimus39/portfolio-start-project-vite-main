import {Menu} from "../menu/Menu.tsx";
import {S} from "./../headerMenuStyles.ts"

export type MenuItemProps = {
    menuItem: string[]
}
export const DesktopMenu = (props: MenuItemProps) => {
    return (
        <S.StyledDesktopMenu>
            <Menu menuItem={props.menuItem}/>
        </S.StyledDesktopMenu>
    );
};
