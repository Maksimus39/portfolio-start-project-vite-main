import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.tsx";
import { Container } from "../Container.ts";
import {Theme} from "../../style/Theme.ts";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section``



const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`


const Field = styled.input`
    width: 100%;

    background-color: ${Theme.colors.secondaryBg};
    border: 1px solid ${Theme.colors.inputColor};
    padding: 7px 15px;
    
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${Theme.colors.font};
    
    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible{
        outline: 1px solid ${Theme.colors.placeholderColor};
    }
`



