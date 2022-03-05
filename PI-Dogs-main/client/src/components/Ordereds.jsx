import FilterAD from "./FilterAD";
import OrderAlf from "./OrderAlf";
import FilterTemp from "./FilterTemp";
import FilterWeight from "./FilterWeight";
import s from "./styles/Ordereds.module.css";
import OrderWeight from "./OrderWeight";

function Ordereds() {
    return (
        <div className={s.ordereds}>
            {/* <h2>All Dogs</h2> */}
            <h3>Order:</h3>
            <OrderAlf />
            <OrderWeight />
            <h3>Filter:</h3>
            <FilterAD />
            <FilterTemp />
            <FilterWeight />
        </div>
    )
}

export default Ordereds
