import { ASCENDENT, DESCENDENT } from "../constants/sort"
import { sortAlf } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";


export default function OrderAlf() {
    const dispatch = useDispatch();
    function onSelectChange(e) {
        dispatch(sortAlf(e.target.value))
    }

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ASCENDENT}>Alphabetically</option>
                <option value={ASCENDENT}>Ascendent</option>
                <option value={DESCENDENT}>Descendent</option>
            </select>
        </div>
    )
}
