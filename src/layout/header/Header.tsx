import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItem={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
`

