import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, postDog } from "../store/actions";
import s from "./styles/AddDog.module.css";

function validate(dog) {
  let errors = {};
  if (!dog.name) {
    errors.name = "Require name";
  } else if (!dog.image) {
    errors.image = "Require image";
  } else if (!dog.heightMin) {
    errors.heightMin = "Require min height";
  } else if (!dog.heightMax) {
    errors.heightMax = "Require max height";
  } else if (!dog.weightMin) {
    errors.weightMin = "Require min weight";
  } else if (!dog.weightMax) {
    errors.weightMax = "Require max weight";
  } else if (!dog.life_spanMin) {
    errors.life_spanMin = "Require min life span";
  } else if (!dog.life_spanMax) {
    errors.life_spanMax = "Require max life span";
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
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_spanMin: "",
    life_spanMax: "",
    temperament: [],
  });
  const [errors, setErrors] = useState({});

  function onInputChange(e) {
    e.preventDefault();
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...dog,
        [e.target.name]: e.target.value,
      })
    );
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
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_spanMin: "",
      life_spanMax: "",
      temperament: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div className={s.all}>
      <form className={s.formulario} onSubmit={(e) => onSubmit(e)}>
        <Link to="/home">
          <button className={s.buttonBack}>Back</button>
        </Link>
        <div className={s.boxForm}>
          <h1 className={s.head}>New Breed Dog</h1>
          <div className={s.boxThree}>
            <div className={s.three}>
              <div className={s.divs}>
                <label className={s.heads}>Name</label>
                <div className={s.boxFormularios}>
                  {errors.name ? (
                    <input
                      className={s.inputError}
                      onChange={onInputChange}
                      value={dog.name}
                      name="name"
                      type="text"
                    />
                  ) : (
                    <input
                      className={s.input}
                      onChange={onInputChange}
                      value={dog.name}
                      name="name"
                      type="text"
                      placeholder="e.g: Rocky"
                    />
                  )}
                  {errors.name && <p className={s.error}>{errors.name}</p>}
                </div>
              </div>
              <div className={s.divs}>
                <label className={s.heads}>Image</label>
                <div className={s.boxFormularios}>
                  {errors.image ? (
                    <input
                      className={s.inputError}
                      onChange={onInputChange}
                      value={dog.image}
                      name="image"
                      type="text"
                    />
                  ) : (
                    <input
                      className={s.input}
                      onChange={onInputChange}
                      value={dog.image}
                      name="image"
                      type="text"
                      placeholder="Image link"
                    />
                  )}
                  {errors.image && <p className={s.error}>{errors.image}</p>}
                </div>
              </div>
              <div className={s.divs}>
                <label className={s.heads}>Height (cm)</label>
                <div className={s.boxFormularios}>
                  {errors.height ? (
                    <div style={{ display: "flex" }}>
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.heightMin}
                        name="heightMin"
                        type="text"
                        placeholder="min"
                      />
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.heightMax}
                        name="heightMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.heightMin}
                        name="heightMin"
                        type="text"
                        placeholder="min"
                      />{" "}
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "0px 10px",
                        }}
                      >
                        &#8211;
                      </p>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.heightMax}
                        name="heightMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  )}
                  {errors.heightMin && <p className={s.error}>{errors.heightMin}</p>}
                  {errors.heightMax && <p className={s.error}>{errors.heightMax}</p>}
                </div>
              </div>
            </div>
            <div className={s.three}>
              <div className={s.divs}>
                <label className={s.heads}>Weight (kg)</label>
                <div className={s.boxFormularios}>
                  {errors.weight ? (
                    <div style={{ display: "flex" }}>
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.weightMin}
                        name="weightMin"
                        type="text"
                        placeholder="min"
                      />
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.weightMax}
                        name="weightMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.weightMin}
                        name="weightMin"
                        type="text"
                        placeholder="min"
                      />{" "}
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "0px 10px",
                        }}
                      >
                        &#8211;
                      </p>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.weightMax}
                        name="weightMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  )}
                  {errors.weightMin && <p className={s.error}>{errors.weightMin}</p>}
                  {errors.weightMax && <p className={s.error}>{errors.weightMax}</p>}
                </div>
              </div>
              <div className={s.divs}>
                <label className={s.heads}>Life span (years)</label>
                <div className={s.boxFormularios}>
                  {errors.life_span ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.life_spanMin}
                        name="life_spanMin"
                        type="text"
                        placeholder="min"
                      />{" "}
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "0px 10px",
                        }}
                      >
                        &#8211;
                      </p>
                      <input
                        className={s.inputError}
                        onChange={onInputChange}
                        value={dog.life_spanMax}
                        name="life_spanMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.life_spanMin}
                        name="life_spanMin"
                        type="text"
                        placeholder="min"
                      />{" "}
                      <p
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "0px 10px",
                        }}
                      >
                        &#8211;
                      </p>
                      <input
                        className={s.inputWH}
                        onChange={onInputChange}
                        value={dog.life_spanMax}
                        name="life_spanMax"
                        type="text"
                        placeholder="max"
                      />
                    </div>
                  )}
                  {errors.life_spanMin && (
                    <p className={s.error}>{errors.life_spanMin}</p>
                  )}
                  {errors.life_spanMax && (
                    <p className={s.error}>{errors.life_spanMax}</p>
                  )}
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
            <div
              style={{
                display: "inline-flex",
                listStyle: "none",
                color: "white",
                width: "402px",
              }}
            >
              {dog.temperament.length
                ? dog.temperament.map((t) => t + ", ")
                : "Here the selected temperaments will appear"}
            </div>
          </div>
        </div>
        <div>
          <input className={s.buttonOk} type="submit" value="Create" /> :
        </div>
      </form>
    </div>
  );
}
