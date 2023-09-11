import style from '../navigation/nav.module.scss'
import { Link } from 'react-router-dom'

export function Navigation(){

    return(
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/plakater">Plakater</Link>
                <Link to="/omos">Om os</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}