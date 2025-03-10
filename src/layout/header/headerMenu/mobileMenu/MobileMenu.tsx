import {Menu} from "../menu/Menu.tsx";
import {S} from "./../headerMenuStyles.ts"
import {useState} from "react";

type MenuItemProps = {
    menuItem: string[]
}

export const MobileMenu = (props: MenuItemProps) => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen}
                            onClick={onBurgerBtnClick}
            >
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopUp isOpen={menuIsOpen}
                               onClick={() => {
                                   setMenuIsOpen(false)
                               }}>
                <Menu menuItem={props.menuItem}/>
            </S.MobileMenuPopUp>
        </S.StyledMobileMenu>
    );
};