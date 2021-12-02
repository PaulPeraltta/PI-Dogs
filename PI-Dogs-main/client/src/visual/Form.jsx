import AddDog from "../components/AddDog"
import NavForm from "../components/NavForm"
import s from "./styles/Form.module.css";

function Form() {
    return (
        <div className={s.form}>
            <NavForm />
            <AddDog />
        </div>
    )
}

export default Form
