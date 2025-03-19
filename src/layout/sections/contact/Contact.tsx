import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contact_Styles.ts"
import * as React from "react";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";


export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_b6hzcmt', 'template_pbt5ezu', form.current, {
            publicKey: 'Gxg7cGw_9MpLiHoUM'
        }).then(() => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
        e.currentTarget.reset()
    };


    return (
        <S.StyledContacts id={"contact"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
};
