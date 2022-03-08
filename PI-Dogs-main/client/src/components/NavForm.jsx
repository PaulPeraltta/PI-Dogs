import { Link } from "react-router-dom";
import s from "./styles/NavForm.module.css";

function Nav() {
  return (
    <nav className={s.navAll}>
      <div>
        <Link style={{ textDecoration: "none"}} to="/home">
          <h1 className={s.title}>MyLittleBuddy</h1>
        </Link>
      </div>
      <Link style={{textDecoration: "none", display: "flex", alignItems: "center"}} to="/about">
      <h1 className={s.about}>AboutMe</h1>
        </Link>
    </nav>
  );
}

export default Nav;
