import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const GoTopBtn = () => {
    return (
        <StyledGoTopBtn>
            <Icon iconId={"goTopBtn"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
        </StyledGoTopBtn>
    );
};


const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
