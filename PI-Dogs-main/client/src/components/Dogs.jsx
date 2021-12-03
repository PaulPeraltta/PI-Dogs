import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../store/actions";
import { useEffect } from "react";
import Dog from "./Dog";
import s from "./styles/Dogs.module.css";
import { useState } from "react";
import Pagination from "./Pagination";

export default function Dogs() {
    const breeds = useSelector((state) => state.filteredBreeds);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentsDogs = breeds.slice(indexOfFirstDog, indexOfLastDog)

    const paginado = (numberPage) => {
        setCurrentPage(numberPage)
    }

    useEffect(() => {
        dispatch(fetchBreeds());
    }, [])
  return (
      <div>
        < div className={s.cards}>
            { currentsDogs && currentsDogs.map((d)=>{
                return <Dog name={d.name} dogImage={d.image} weight={d.weight} temps={d.temps} id={d.id} key={d.id}/>
            })}
        </div>
                <Pagination 
                    dogsPerPage={dogsPerPage}
                    breeds={breeds.length}
                    paginado={paginado}
                />
        </div>
    );
}
