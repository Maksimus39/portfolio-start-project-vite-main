import {Menu} from "../menu/Menu.tsx";
import {S} from "./../headerMenuStyles.ts"

type MenuItemProps = {
    menuItem: string[]
}

export const MobileMenu = (props: MenuItemProps) => {

    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopUp isOpen={false}>
                <Menu menuItem={props.menuItem}/>
            </S.MobileMenuPopUp>
        </S.StyledMobileMenu>
    );
};