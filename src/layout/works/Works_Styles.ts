import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Theme} from "../../style/Theme.ts";
import {Button} from "../../components/Button.ts";


// Works
const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
    
    position: relative;
`

// Work
const StyledWork = styled.div`
    background-color: ${Theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    $(Link) {
        padding: 10px 0;

        & + $(Link) {
            margin-left: 20px;
        }
    }

    @media ${Theme.media.desktop} {
        max-width: 540px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Title = styled.h3``
const Text = styled.p`
    margin: 14px 0 10px;
`
const Description = styled.div`
    padding: 25px 20px;
`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        opacity: 0;

    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

// TabMenu
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

export const S = {
    StyledWorks,
    StyledWork,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper,
    StyledTabMenu,
    ListItem
}