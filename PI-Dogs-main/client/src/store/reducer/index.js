import { ASCENDENT, DESCENDENT, API, DB } from "../../constants/sort";
import { FETCH_BREEDS, SEARCH_BREEDS, SORT_AD, SORT_ALF } from "../actions";

 const initialState = {
     breeds: [],
     filteredBreeds: []
 }

 export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BREEDS:
            return {
                ...state, 
                breeds: action.payload,
                filteredBreeds: action.payload
            }
        case SEARCH_BREEDS:
            return {
                ...state, 
                filteredBreeds: action.payload 
            }
        case SORT_ALF:
            let orderedBreeds= [...state.breeds]
                orderedBreeds.sort( (a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                      return action.payload === DESCENDENT ? -1 : 1
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return action.payload === ASCENDENT ? 1 : -1
                    }
                    return 0;
                  });
            return {
                ...state,
                filteredBreeds: orderedBreeds,
            }
        case SORT_AD:
            const [api, db] = state.breed;
            if(action.payload === DB) console.log(api)
            if(action.payload === API) console.log(db)

            return {
                ...state
            }
        default:
            return state
    }
 }