import style from "../navigation/Nav.module.scss";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <div className={style.navigation}>
        <div className={style.name}>
          <h1>Wallywood</h1>
        </div>
        <div className={style.navbar}>
          <Link className={style.navLinks} to="/">
            Home
          </Link>
          <Link className={style.navLinks} to="/plakater">
            Plakater
          </Link>
          <Link className={style.navLinks} to="/omos">
            Om os
          </Link>
          <Link className={style.navLinks} to="/kontakt">
            Kontakt
          </Link>
          <Link className={style.navLinks} to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
