import * as React from "react";
import {MenuItemProps} from "../desktopMenu/DesktopMenu.tsx";
import {S} from "./../headerMenuStyles.ts"


export const Menu: React.FC<{ menuItem: string[] }> = (props: MenuItemProps) => {
    return (
        <ul>
            {props.menuItem.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.Link href="">
                        {item}
                        <S.Mask><span>{item}</span></S.Mask>
                        <S.Mask><span>{item}</span></S.Mask>
                    </S.Link>
                </S.ListItem>
            })}
        </ul>
    );
};