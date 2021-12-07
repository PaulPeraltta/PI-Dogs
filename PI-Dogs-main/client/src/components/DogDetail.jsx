import React from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import s from "./styles/DogDetail.module.css";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/actions";

export default function DogDetail() {
  let iKey = 1000;
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  let dog = useSelector((state) => state.detail);

  function onBack(e) {
    e.preventDefault();
    history.push("/home");
  }

  return (
    <div className={s.box}>
      <div className={s.nav}>
        <Nav />
      </div>
      {dog ? (
        <div className={s.cardDetail}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignSelf: "flex-start",
            }}
          >
            <button onClick={(e) => onBack(e)} className={s.button}>
              Back
            </button>
          </div>
          <img className={s.imagen} src={dog.image} alt="Doggie" />
          <div className={s.boxinfo}>
            <h1 className={s.name}>{dog.name}</h1>
            <div className={s.metrics}>
              <h3>Height: {dog.height}</h3>

              <h3>Weight: {dog.weight}</h3>

              <h3 className={s.life}>Life-Span: {dog.life_span}</h3>
            </div>
            <div>
              <h4 className={s.tempTitle}>Temperaments</h4>
              <div className={s.temps}>
                {Array.isArray(dog.temps) ? (
                  dog.temps.map((t) => {
                    return <p key={iKey++}>{t},&nbsp;</p>;
                  })
                ) : (
                  <p>{dog.temps}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.contentLoad}>
          <div className={s.spinner}></div>
          <p className={s.load}>Loading</p>
        </div>
      )}
    </div>
  );
}
