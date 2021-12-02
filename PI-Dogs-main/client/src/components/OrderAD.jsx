import { API, DB } from "../constants/sort"
import { sortAD } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";


export default function OrderAD() {
    const dispatch = useDispatch();
    function onSelectChange(e) {
        dispatch(sortAD(e.target.value))
    }

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={API}>API-DB</option>
                <option value={API}>API</option>
                <option value={DB}>DB</option>
            </select>
        </div>
    )
}
