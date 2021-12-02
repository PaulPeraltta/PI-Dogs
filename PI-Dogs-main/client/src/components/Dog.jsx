import { Link } from "react-router-dom";
import s from "./styles/Dog.module.css";


export default function Dog({id, name, dogImage, temps, weight}) {
    return (
            <Link style={{textDecoration:"none"}} to={`/home/dogs/${id}`}>
        <div className={s.card}>
            <img className={s.image} src={dogImage} alt="Doggie" />
            <h1 className={s.name}>{name}</h1>
            <div className={s.bottom}>
            <h4>Weight: {weight} kg</h4>
            <p>{temps}</p>
            </div>
        </div>
            </Link>
    )
}


