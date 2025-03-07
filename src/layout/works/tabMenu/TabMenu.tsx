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


    ul {
        display: flex;
        justify-content: space-between;

        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`;

const ListItem=styled.li`
  
`