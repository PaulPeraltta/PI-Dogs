import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import s from "./styles/AddDog.module.css";
import { Link } from "react-router-dom";

export default function AddDog() {
  const [dog, setDog] = useState({});
  let history = useHistory();

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/dogs/", dog).then(() => {
      history.push("/home");
    });
  }

  return (
      <div className={s.all}>
          <Link to="/home">
          <button className={s.button}>Back</button>
          </Link>
    <form className={s.formulario} onSubmit={onSubmit}>
        <h1 className={s.head}>New Breed Dog</h1>
      <div className={s.divs}>
        <label className={s.heads}>Name</label>
        <div className={s.content}>
          <input
            className={s.input}
            onChange={onInputChange}
            name="name"
            type="text"
          />
        </div>
      </div>
      <div className={s.divs}>
        <label className={s.heads}>Image</label>
        <div className={s.content}>
          <input
            className={s.input}
            onChange={onInputChange}
            name="image"
            type="text"
          />
        </div>
      </div>
      <div className={s.divs}>
        <label className={s.heads}>Height</label>
        <div className={s.content}>
          <input
            className={s.input}
            onChange={onInputChange}
            name="height"
            type="text"
          />
        </div>
      </div>
      <div className={s.divs}>
        <label className={s.heads}>Weight</label>
        <div className={s.content}>
          <input
            className={s.input}
            onChange={onInputChange}
            name="weight"
            type="text"
          />
        </div>
      </div>
      <div className={s.divs}>
        <label className={s.heads}>Life span</label>
        <div className={s.content}></div>
        <input
          className={s.input}
          onChange={onInputChange}
          name="life_span"
          type="text"
        />
      </div>
      <input className={s.button} type="submit" value="Create" />
    </form>
    </div>
  );
}
