import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"
import s from "./styles/Nav.module.css";

function Nav() {
    return (
        <nav className={s.navAll}>
            <Link style={{textDecoration: "none"}} to="/home">
            <h1 className={s.title}>MyLittleBuddy</h1>
            </Link>
            <SearchBar />
            <Link style={{textDecoration: "none"}} to="/about">
            <h1 className={s.about}>AboutMe</h1>
            </Link>
        </nav>
    )
}

export default Nav
