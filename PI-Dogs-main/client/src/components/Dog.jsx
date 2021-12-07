import { Link } from "react-router-dom";
import s from "./styles/Dog.module.css";


export default function Dog({id, name, dogImage, temps, weight}) {
    let keyID = 5000;
    return (
        <div className={s.card}>
            <Link style={{textDecoration:"none"}} to={`/home/dogs/${id}`}>
            <div style={{position: "absolute", display: "flex", justifyContent: "right"}}>
            <img className={s.image} src={dogImage} alt="Doggie" />
            <h4>Weight: {weight} kg</h4>
            </div>
            <div className={s.boxBottom} style={{marginTop: "165px"}}>
            <h1 className={s.name}>{name}</h1>
                
                {Array.isArray(temps) ? <div className={s.boxTempArray}> {temps.map(t => {
                    return <p className={s.bottomArray} key={keyID++}>{t},&nbsp;</p>
                })} </div>
                    :
            <div className={s.bottom}>
                    <p>{temps}</p>
            </div>
                }
                
            </div>
            </Link>
        </div>
    )
}


