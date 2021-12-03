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
  }

  return (
    <div>
      {/* <form onSubmit={onSubmit}>
        <input type="text" onChange={inputOnChange} value={search} />
        <input type="submit" value="Search" />
      </form> */}
      <div className={s.cont}>
                <form className={s.form} onSubmit={onSubmit}>
                    <input className={s.inpt} type="text" onChange={inputOnChange}/>
                    {/* <button onClick={handleReload} style={{width:"20px", height:"20px", backgroundColor:"transparent", borderColor:"transparent", alignItems:"center"}} ><img src="https://img.icons8.com/material-sharp/24/ffffff/railroad-crossing-sign--v1.png"/></button> */}
                    <input className={s.butn}type="image" src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png" />
                </form>
            </div>
    </div>
  );
}
