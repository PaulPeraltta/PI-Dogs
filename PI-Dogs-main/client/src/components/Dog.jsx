import { Link } from "react-router-dom";
import s from "./styles/Dog.module.css";


export default function Dog({id, name, dogImage, temps, weight}) {
    return (
        <div className={s.card}>
            <Link style={{textDecoration:"none"}} to={`/home/dogs/${id}`}>
            <img className={s.image} src={dogImage} alt="Doggie" />
            <h1 className={s.name}>{name}</h1>
            </Link>
            <div className={s.bottom}>
            <h4>Weight: {weight} kg</h4>
            <p>{temps}</p>
            </div>
        </div>
    )
}


