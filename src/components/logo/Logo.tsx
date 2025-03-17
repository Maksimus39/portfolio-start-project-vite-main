import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll"

export const Logo = () => {

    const scrollToTopHandler = () => {
        scroll.scrollToTop()
    }

    return (
        <a onClick={scrollToTopHandler}>
            <Icon iconId={'react'}/>
        </a>
    );
};

