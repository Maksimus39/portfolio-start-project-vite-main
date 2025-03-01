import styled from "styled-components";


type MenuItemProps = {
    menuItem: string[]
}
export const Menu = (props: MenuItemProps) => {


    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`;