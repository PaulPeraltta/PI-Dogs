import { ALL } from "../constants/sort"
import { filterDogsByTemp, getTemperaments } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./styles/Ordereds.module.css";
import { useEffect } from "react";


export default function FilterTemp() {
    let filterKey = 10000;
    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();

    function onSelectChange(e) {
        dispatch(filterDogsByTemp(e.target.value))
    }
    
    useEffect(() => {
        dispatch(getTemperaments());
      }, [dispatch]);

    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ALL}>Temps</option>
                {temperaments.map(t => <option key={filterKey++} value={t.name}>{t.name}</option>)}
            </select>
        </div>
    )
}
