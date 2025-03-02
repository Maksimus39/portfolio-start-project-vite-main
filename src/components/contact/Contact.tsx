import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: mediumpurple;

`


const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`


const Field = styled.input`

`



