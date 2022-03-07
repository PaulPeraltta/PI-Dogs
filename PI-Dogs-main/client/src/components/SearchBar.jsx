import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBreeds, searchBreeds } from "../store/actions";
import s from "./styles/SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchBreeds(search));
  }

  function inputOnChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleReload(e) {
    e.preventDefault();
    dispatch(fetchBreeds());
    setSearch("");
  }

  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <input type="text" onChange={inputOnChange} value={search} />
        <input type="submit" value="Search" />
      </form> */}
      <div className={s.cont}>
                <form className={s.form} onSubmit={e => onSubmit(e)}>
                    <input value={search} className={s.inpt} type="text" placeholder="Search Dog" onChange={e => inputOnChange(e)}/>
                    <button className ={s.butn} onClick={e => handleReload(e)} style={{width:"20px", height:"20px", backgroundColor:"transparent", borderColor:"transparent", alignItems:"center"}} ><img className={s.cross} src="https://img.icons8.com/material-outlined/24/ffffff/delete-sign.png" alt="Cross"/></button>      
                    <input className={s.butn} type="image" src="https://img.icons8.com/material-outlined/24/00028A/search--v1.png" alt="Lupa"/>
                </form>
            </div>
    </div>
  );
}
