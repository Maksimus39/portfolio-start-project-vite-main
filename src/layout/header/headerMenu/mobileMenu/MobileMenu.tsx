import {Menu} from "../menu/Menu.tsx";
import {S} from "./../headerMenuStyles.ts"
import {useState} from "react";


export const MobileMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const onBurgerBtnClick = () => setMenuIsOpen(!menuIsOpen)
    const setMenuIsOpenHandler = () => setMenuIsOpen(false)


    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={menuIsOpen}
                            onClick={onBurgerBtnClick}
            >
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopUp isOpen={menuIsOpen}
                               onClick={setMenuIsOpenHandler}>
                <Menu/>
            </S.MobileMenuPopUp>
        </S.StyledMobileMenu>
    );
};