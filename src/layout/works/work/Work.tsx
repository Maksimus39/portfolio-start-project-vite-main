import styled from "styled-components";


type WorkProps = {
    title: string;
    text: string;
    src: string
}

export const Work = (props: WorkProps) => {

    const {title, text, src} = props;
    return (
        <StyledWork>
            <Image src={src} alt="work"/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: goldenrod;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a``

const Title = styled.h3``

const Text = styled.p``
