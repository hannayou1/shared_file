import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollTo = () => {
    const { pathname } = useLocation(); //페이지가 바뀌는걸 감지해서 

    useEffect( () => {
        window.scrollTo(0,0); //맨 위로 해준다
    }, [pathname])

    return null;
}

export default ScrollTo