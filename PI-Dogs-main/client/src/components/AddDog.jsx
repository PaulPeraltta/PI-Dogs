import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../store/actions";
import axios from "axios";
import s from "./styles/AddDog.module.css";

function validate(dog) {
  let errors = {};
  if(!dog.name) {
    errors.name = "Require name"
  } else if(!dog.image) {
    errors.image = "Require image"
  } else if(!dog.height) {
    errors.height = "Require height"
  } else if(!dog.weight) {
    errors.weight = "Require weight"
  } else if(!dog.life_span) {
    errors.life_span = "Require life span"
  }

  return errors;
}

export default function AddDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);
  const [dog, setDog] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
  });
  const [errors, setErrors] = useState({})

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...dog,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSelect(e) {
    e.preventDefault();
    setDog({
      ...dog,
      temperament: [...dog.temperament, e.target.value],
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postDog(dog));
    alert("Congratulations! Your Dog was created successfully");
    setDog({
      name: "",
      image: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  return (
    <div className={s.all}>
      <form className={s.formulario} onSubmit={(e) => onSubmit(e)}>
        <Link to="/home">
          <button className={s.button}>Back</button>
        </Link>
        <div className={s.boxForm}>
          <h1 className={s.head}>New Breed Dog</h1>
          <div className={s.boxThree}>
          <div className={s.three}>
            <div className={s.divs}>
              <label className={s.heads}>Name</label>
              <div className={s.boxFormularios}>
                {errors.name ? 
                <input 
                className={s.inputError}
                onChange={onInputChange}
                value={dog.name}
                name="name"
                type="text"
              /> : 
                <input 
                  className={s.input}
                  onChange={onInputChange}
                  value={dog.name}
                  name="name"
                  type="text"
                />
                }
                {errors.name && <p className={s.error}>{errors.name}</p>}
              </div>
            </div>
            <div className={s.divs}>
              <label className={s.heads}>Image</label>
              <div className={s.boxFormularios}>
                {errors.image ? 
                <input
                  className={s.inputError}
                  onChange={onInputChange}
                  value={dog.image}
                  name="image"
                  type="text"
                /> :
                <input
                  className={s.input}
                  onChange={onInputChange}
                  value={dog.image}
                  name="image"
                  type="text"
                />
                }
                {errors.image && <p className={s.error}>{errors.image}</p>}
              </div>
            </div>
            <div className={s.divs}>
              <label className={s.heads}>Height</label>
              <div className={s.boxFormularios}>
                { errors.height ? 
                <input
                  className={s.inputError}
                  onChange={onInputChange}
                  value={dog.height}
                  name="height"
                  type="text"
                /> :
                <input
                  className={s.input}
                  onChange={onInputChange}
                  value={dog.height}
                  name="height"
                  type="text"
                />}
                {errors.height && <p className={s.error}>{errors.height}</p>}
              </div>
            </div>
          </div>
          <div className={s.three}>
            <div className={s.divs}>
              <label className={s.heads}>Weight</label>
              <div className={s.boxFormularios}>
                {errors.weight ? <input
                  className={s.inputError}
                  onChange={onInputChange}
                  value={dog.weight}
                  name="weight"
                  type="text"
                /> :
                <input
                  className={s.input}
                  onChange={onInputChange}
                  value={dog.weight}
                  name="weight"
                  type="text"
                />}
                {errors.weight && <p className={s.error}>{errors.weight}</p>}
              </div>
            </div>
            <div className={s.divs}>
              <label className={s.heads}>Life span</label>
              <div className={s.boxFormularios}>
                {errors.life_span?
                <input
                  className={s.inputError}
                  onChange={onInputChange}
                  value={dog.life_span}
                  name="life_span"
                  type="text"
                />:
                <input
                  className={s.input}
                  onChange={onInputChange}
                  value={dog.life_span}
                  name="life_span"
                  type="text"
                />}
                {errors.life_span && <p className={s.error}>{errors.life_span}</p>}
              </div>
            </div>
            <div className={s.divs}>
              <label className={s.heads}>Temperament</label>
              <div className={s.boxFormularios}>
                <select
                  style={{ paddingLeft: "46px", paddingRight: "46px" }}
                  className={s.input}
                  onChange={(e) => handleSelect(e)}
                >
                  {temperaments.map((temp) => (
                    <option value={temp.name} key={temp.id}>
                      {temp.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={s.temps}>
          <div style={{ display: "inline-flex", listStyle: "none", color: "white", width: "402px" }}>
            { dog.temperament.length ? dog.temperament.map((t) => t + ", ") : "Here the selected temperaments will appear"}
          </div>
        </div>
          </div>
        <div>
          <input className={s.button} type="submit" value="Create" /> :
         </div>
      </form>
    </div>
  );
}
