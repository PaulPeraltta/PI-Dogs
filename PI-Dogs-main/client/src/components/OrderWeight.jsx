import { ASCENDENT, DESCENDENT, ALL } from "../constants/sort"
import { sortWeight } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";


export default function OrderWeight() {
    const dispatch = useDispatch();
    function onSelectChange(e) {
        e.preventDefault();
        dispatch(sortWeight(e.target.value))
    }

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ALL}>Weight</option>
                <option value={ASCENDENT}>Ascendent</option>
                <option value={DESCENDENT}>Descendent</option>
            </select>
        </div>
    )
}
