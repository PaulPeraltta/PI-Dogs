import { Link } from "react-router-dom";
import s from "./styles/Front.module.css";

export default function Front() {
  return (
    <div>
      <img
        className={s.back}
        src="https://www.wallpaperflare.com/static/766/847/605/beagle-dog-muzzle-collar-wallpaper.jpg"
        alt="beagle"
      />
      <h1 className={s.title}>MyLittleBuddy</h1>
      <Link style={{ textDecoration: "none" }} to="/home">
        <h2 className={s.btn}>Click HERE to start!</h2>
      </Link>

      <div className={s.power}>
        <p>PoweredBY: </p>
        <p className={s.name}>&nbsp;PAUL PERALTA</p>
      </div>
    </div>
  );
}
