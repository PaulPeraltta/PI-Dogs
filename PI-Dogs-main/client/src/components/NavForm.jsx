import { Link } from "react-router-dom";
import s from "./styles/NavForm.module.css";

function Nav() {
    return (
        <nav className={s.navAll}>
            <Link style={{textDecoration: "none"}} to="/home">
            <h1 className={s.title}>MyLittleBuddy</h1>
            </Link>
            <h1 className={s.about}>AboutMe</h1>
        </nav>
    )
}

export default Nav
