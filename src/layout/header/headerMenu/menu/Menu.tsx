import {S} from "./../headerMenuStyles.ts"


const items = [
    {title: "Home", href: "home"},
    {title: "Skills", href: "skills"},
    {title: "Works", href: "works"},
    {title: "Testimony", href: "testimony"},
    {title: "Contact", href: "contact"}
]


export const Menu = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.ListItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass={"active"}
                               spy={true}
                    >
                        {item.title}
                        <S.Mask><span>{item.title}</span></S.Mask>
                        <S.Mask><span>{item.title}</span></S.Mask>
                    </S.NavLink>
                </S.ListItem>
            })}
        </ul>
    );
};