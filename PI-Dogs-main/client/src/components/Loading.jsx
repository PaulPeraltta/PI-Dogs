import s from "./styles/Loading.module.css";

function Loading() {
    return (
        <div className={s.contentLoad}>
          <div className={s.spinner}></div>
          <p className={s.load}>Loading</p>
        </div> 
    )
}

export default Loading
