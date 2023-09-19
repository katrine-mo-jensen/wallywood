import { children } from "react";
import style from '../onClick/OnClickButton.module.scss'

export const OnClickButton = ({clickEvent, children}) => {

    return(
        <button className={style.btn} onClick={clickEvent}>{children}</button>
    )
}