import { ALL, OneAtThree, OneAtFive, TwoAtThree, TwoAtFour, ThreeAtFour,
    ThreeAtFive, ThreeAtSix, ThreeAtSeven, FourAtFive, FourAtSix, FourAtSeven,
    FourAtEleven, FourAtFourteen, Five, FiveAtFive, FiveAtSix, FiveAtSeven,
    FiveAtEight, FiveAtNine, FiveAtEleven, SixAtSix, SixAtSeven, SixAtEight,
    SevenAtEight, SevenAtNine, SevenAtTen, EightAtTen, EightAtFifteen, NineAtEleven,
    NineAtFourteen, NineAtSixteen, NineAtEighteen, TenAtEleven, TenAtThirteen,
    ElevenAtTwelve, ElevenAtFourteen, ElevenAtFifteen, ElevenAtSixteen, ElevenAtSeventeen,
    ElevenAtEighteen, ElevenAtTwenty} from "../constants/sort"
import { filterDogsByWeight } from "../store/actions";
import { useDispatch } from "react-redux";
import s from "./styles/Ordereds.module.css";


export default function FilterWeight() {
    const dispatch = useDispatch();

    function onSelectChange(e) {
        dispatch(filterDogsByWeight(e.target.value))
    }




    return (
        <div>
            <select className={s.select} onChange={onSelectChange}>
                <option value={ALL}>Weight</option>
                <option value={OneAtThree}>1 - 3</option>
                <option value={OneAtFive}>1 - 5</option>
                <option value={TwoAtThree}>2 - 3</option>
                <option value={TwoAtFour}>2 - 4</option>
                <option value={ThreeAtFour}>3 - 4</option>
                <option value={ThreeAtFive}>3 - 5</option>
                <option value={ThreeAtSix}>3 - 6</option>
                <option value={ThreeAtSeven}>3 - 7</option>
                <option value={FourAtFive}>4 - 5</option>
                <option value={FourAtSix}>4 - 6</option>
                <option value={FourAtSeven}>4 - 7</option>
                <option value={FourAtEleven}>4 - 11</option>
                <option value={FourAtFourteen}>4 - 14</option>

                <option value={Five}>5</option>
                <option value={FiveAtFive}>5 - 5</option>
                <option value={FiveAtSix}>5 - 6</option>
                <option value={FiveAtSeven}>5 - 7</option>
                <option value={FiveAtEight}>5 - 8</option>
                <option value={FiveAtNine}>5 - 9</option>
                <option value={FiveAtEleven}>5 - 11</option>
                <option value={SixAtSix}>6 - 6</option>
                <option value={SixAtSeven}>6 - 7</option>
                <option value={SixAtEight}>6 - 8</option>
                <option value={SevenAtEight}>7 - 8</option>
                <option value={SevenAtNine}>7 - 9</option>
                <option value={SevenAtTen}>7 - 10</option>
                <option value={EightAtTen}>8 - 10</option>
                <option value={EightAtFifteen}>8 - 15</option>
                <option value={NineAtEleven}>9 - 11</option>
                <option value={NineAtFourteen}>9 - 14</option>
                <option value={NineAtSixteen}>9 - 16</option>
                <option value={NineAtEighteen}>9 - 18</option>
                <option value={TenAtEleven}>10 - 11</option>
                <option value={TenAtThirteen}>10 - 13</option>
                <option value={ElevenAtTwelve}>11 - 12</option>
                <option value={ElevenAtFourteen}>11 - 14</option>
                <option value={ElevenAtFifteen}>11 - 15</option>
                <option value={ElevenAtSixteen}>11 - 16</option>
                <option value={ElevenAtSeventeen}>11 - 17</option>
                <option value={ElevenAtEighteen}>11 - 18</option>
                <option value={ElevenAtTwenty}>11 - 20</option>
            </select>
        </div>
    )
}
