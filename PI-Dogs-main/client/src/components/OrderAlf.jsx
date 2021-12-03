import { ASCENDENT, DESCENDENT, ALL } from "../constants/sort"
import { sortAlf } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";
import { useState } from "react";


export default function OrderAlf() {
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();
    function onSelectChange(e) {
        e.preventDefault();
        dispatch(sortAlf(e.target.value))
        setOrder(`Ordered ${e.target.value}`)
    }

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ALL}>Alphabetically</option>
                <option value={ASCENDENT}>Ascendent</option>
                <option value={DESCENDENT}>Descendent</option>
            </select>
        </div>
    )
}
