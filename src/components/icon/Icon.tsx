import iconsSprite from "../../assets/images/sprite/sprite.svg"


type Props = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: Props) => {

    const {iconId, width, height, viewBox} = props
    return (
        <svg width={width || "50"}
             height={height || "50"}
             viewBox={viewBox || "0 0 50 50"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
        </svg>
    );
};
