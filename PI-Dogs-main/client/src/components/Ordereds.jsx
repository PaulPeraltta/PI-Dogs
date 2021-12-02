import OrderAD from "./OrderAD";
import OrderAlf from "./OrderAlf";
import OrderTemp from "./OrderTemp";
import OrderWeight from "./OrderWeight";
import s from "./styles/Ordereds.module.css";

function Ordereds() {
    return (
        <div className={s.ordereds}>
            <h1>All Dogs</h1>
            <h3>Order:</h3>
            <OrderAlf />
            <h3>Filter:</h3>
            <OrderAD />
            <OrderTemp />
            <OrderWeight />
        </div>
    )
}

export default Ordereds
