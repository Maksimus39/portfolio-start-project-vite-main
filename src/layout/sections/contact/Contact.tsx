import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contact_Styles.ts"
import * as React from "react";


export const Contact: React.FC = () => {
    return (
        <S.StyledContacts id={"contact"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
};
