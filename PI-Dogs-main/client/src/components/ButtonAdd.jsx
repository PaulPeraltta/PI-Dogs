import s from "./styles/ButtonAdd.module.css";
import { Link } from "react-router-dom";

export default function ButtonAdd() {
     return (
         <div>
            <Link to="/add">
             <button className={s.btn}>+</button>
             </Link>
         </div>
     )
 }