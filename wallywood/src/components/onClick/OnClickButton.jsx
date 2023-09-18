import { children } from "react";
import style from '../onClick/OnClickButton.module.scss'

export const OnClickButton = ({clickEvent, children}) => {

    return(
        <button className={style.OnClickButton} onClick={clickEvent}>{children}</button>
    )
}