import styled from "styled-components";
import {Link} from "../../../components/Link.tsx";


type MenuItemProps = {
    menuItem: string[]
}
export const TabMenu = (props: MenuItemProps) => {

    return (
        <StyledTabMenu>
            <ul>
                {props.menuItem.map((item, i) =><ListItem key={i}><Link href={"#"}>{item}</Link></ListItem>)}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`;

const ListItem=styled.li`
  
`