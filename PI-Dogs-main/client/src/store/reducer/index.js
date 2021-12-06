import { ALL, ASCENDENT, DESCENDENT, DB } from "../../constants/sort";
import { FETCH_BREEDS, GET_TEMPERAMENTS, SEARCH_BREEDS, SORT_WEIGHT, SORT_ALF, FILTER_BY_WEIGHT, FILTER_BY_AD, POST_DOG, GET_DETAIL } from "../actions";

 const initialState = {
    breeds: [],
    filteredBreeds: [],
    temperaments: [],
    detail: []
 }

 export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BREEDS:
            return {
                ...state, 
                breeds: action.payload,
                filteredBreeds: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                 ...state,
                temperaments: action.payload
            }
        case SEARCH_BREEDS:
            return {
                ...state, 
                filteredBreeds: action.payload 
            }
        case FILTER_BY_WEIGHT:
            const allBreeds = state.breeds;
            const weightFilter = action.payload === ALL ? allBreeds : allBreeds.filter(el => el.weight === action.payload)
            return {
                ...state,
                filteredBreeds: weightFilter
            }
        case FILTER_BY_AD:
            const theBreeds = state.breeds;
            const whereFilter = action.payload === DB ? theBreeds.filter(el => el.createdInDb) : theBreeds.filter(el => !el.createdInDb);
            return {
                ...state,
                filteredBreeds: action.payload === ALL ? theBreeds : whereFilter
            }
        case SORT_ALF:
            let orderedBreeds= [...state.breeds]
            let sortedBreedsAlf = orderedBreeds.sort( (a, b) => {
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
                filteredBreeds: action.payload === ALL ? state.breeds : sortedBreedsAlf
            }
        case SORT_WEIGHT:
            let orderedBreedsAD = [...state.breeds]
            let sortedBreedsAD = action.payload === ASCENDENT ?
                orderedBreedsAD.sort( (a, b) => {
                    if (parseInt(a.weight, 10) > parseInt(b.weight, 10)) {
                      return 1;
                    }
                    if (parseInt(a.weight, 10) < parseInt(b.weight, 10)) {
                        return -1
                    }
                    return 0;
                  }) : 
                  orderedBreedsAD.sort( (a, b) => {
                      if (parseInt(a.weight, 10) > parseInt(b.weight, 10)) {
                        return - 1;
                      }
                      if (parseInt(a.weight, 10) < parseInt(b.weight, 10)) {
                          return 1
                      }
                      return 0;
                    }) 
                  return {
                ...state,
                filteredBreeds: action.payload === ALL ? state.breeds : sortedBreedsAD
            }
            case POST_DOG: {
                return {
                    ...state
                }
            }
            case GET_DETAIL :
                return {
                    ...state,
                    detail: action.payload
                }
            
        default:
            return state
    }
 }