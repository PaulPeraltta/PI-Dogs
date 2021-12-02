import ButtonAdd from "../components/ButtonAdd";
import Dogs from "../components/Dogs"
import Nav from "../components/Nav"
import Ordereds from "../components/Ordereds"
// import Pagination from "../components/Pagination"
import s from "./styles/Home.module.css";

function Home() {
    return (
        <div className={s.home}>
            <div className={s.subhome}>
            <Nav />
            <Ordereds />
            <Dogs />
            <ButtonAdd />
            </div>
            {/* <Pagination /> */}
        </div>
    )
}

export default Home
