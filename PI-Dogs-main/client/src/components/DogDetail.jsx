import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
 

export default function DogDetail() {
    const [dog, setDog] = useState(null);
    let {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/api/dogs/${id}`)
        .then((resp) => {
            setDog(resp.data)
        })
        return () => {
            setDog(null);
        }
    }, [])
    return (
        <div>
            { 
            dog ? <>
            <h1>{dog.name}</h1>
            {/* <img style={{width: "300px", height:"230px"}} src={dog.dogImage} alt="Doggie" /> */}
            <h3>{dog.height}</h3>
            <h3>{dog.weight}</h3>
            <h3>{dog.life_span}</h3>
            <p>{dog.temps}</p>
            </> : <p>loading...</p>}   
        </div>
    )
}
