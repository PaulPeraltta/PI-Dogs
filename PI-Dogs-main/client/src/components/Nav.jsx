import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from "./styles/Nav.module.css";

function Nav() {
  return (
    <nav className={s.navAll}>
      <div>
        <Link style={{ textDecoration: "none" }} to="/home">
          <h1 className={s.title}>MyLittleBuddy</h1>
        </Link>
      </div>
      <div style={{display: "flex"}}>
        <SearchBar />
        <Link style={{ textDecoration: "none", display: "flex", alignItems: "center"}} to="/about">
          <h1 className={s.about}>AboutMe</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
