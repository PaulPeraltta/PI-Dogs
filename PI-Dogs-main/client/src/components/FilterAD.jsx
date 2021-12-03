import { ALL, API, DB } from "../constants/sort"
import { filterDogsByAD } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";


export default function FilterAD() {
    const dispatch = useDispatch();
    
    function onSelectChange(e) {
        dispatch(filterDogsByAD(e.target.value))
    }

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ALL}>API / DB</option>
                <option value={API}>API</option>
                <option value={DB}>DB</option>
            </select>
        </div>
    )
}
