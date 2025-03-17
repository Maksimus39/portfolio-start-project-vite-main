import {Link} from "../../../../components/Link.ts";
import {Button} from "../../../../components/Button.ts";
import {S} from "../Works_Styles.ts"

type WorkProps = {
    title: string;
    text: string;
    src: string
}

export const Work = (props: WorkProps) => {

    const {title, text, src} = props;
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={src} alt="work"/>
                <Button>View project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={"#"} active>Demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Description>
        </S.StyledWork>
    );
};