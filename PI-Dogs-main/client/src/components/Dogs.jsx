import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../store/actions";
import { useEffect } from "react";
import Dog from "./Dog";
import s from "./styles/Dogs.module.css";

export default function Dogs() {
    const breeds = useSelector((state) => state.filteredBreeds);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBreeds());
    }, [])
  return (
        <div className={s.cards}>
            {breeds.map((b)=>{
                return <Dog name={b.name} dogImage={b.image} weight={b.weight} temps={b.temps} id={b.id} key={b.id}/>
            })}
        </div>
    );
}
