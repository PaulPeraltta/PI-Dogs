import { ALL, DESCENDENT, DB, ThreeAtSeven } from "../../constants/sort";
import {
  FETCH_BREEDS,
  GET_TEMPERAMENTS,
  SEARCH_BREEDS,
  SORT_WEIGHT,
  SORT_ALF,
  FILTER_BY_WEIGHT,
  FILTER_BY_AD,
  POST_DOG,
  GET_DETAIL,
  FILTER_BY_TEMP,
} from "../actions";

const initialState = {
  breeds: [],
  filteredBreeds: [],
  filteredesBreeds: [],
  temperaments: [],
  detail: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        filteredBreeds: action.payload,
        filteredesBreeds: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case SEARCH_BREEDS:
      return {
        ...state,
        filteredBreeds: action.payload,
        filteredesBreeds: action.payload
      };
    case FILTER_BY_WEIGHT:
      const allBreeds = state.breeds;
      const weightFilter =
        action.payload === ALL
          ? state.filteredesBreeds
          : allBreeds.filter((el) => el.weight === action.payload);
      return {
        ...state,
        filteredBreeds: weightFilter,
      };
    case FILTER_BY_TEMP:
      const allBreedes = state.filteredesBreeds;
      const tempFilter = 
       allBreedes.filter((el) => { if(el.temps){
              if(el.temps.includes(action.payload)) {
                return el;
              }
          }})
      return {
        ...state,
        filteredBreeds: action.payload === ALL ? state.filteredesBreeds : tempFilter,
      };
    case FILTER_BY_AD:
      const theBreeds = state.breeds;
      const whereFilter =
        action.payload === DB
          ? theBreeds.filter((el) => el.createdInDb)
          : theBreeds.filter((el) => !el.createdInDb);
      return {
        ...state,
        filteredBreeds: action.payload === ALL ? theBreeds : whereFilter,
        filteredesBreeds: action.payload === ALL ? theBreeds : whereFilter,
      };
    case SORT_ALF:
      let orderedBreeds = [...state.filteredBreeds];
      let sortedBreedsAlf =
        action.payload === DESCENDENT
          ? orderedBreeds.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            })
          : orderedBreeds.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        filteredBreeds: 
          action.payload === ALL ? state.filteredesBreeds : sortedBreedsAlf,
      };
    case SORT_WEIGHT:
      let orderedBreedsAD = [...state.filteredesBreeds];
      let sortedBreedsAD =
        action.payload === DESCENDENT
          ? orderedBreedsAD.sort((a, b) => {
              if (parseInt(a.weight, 10) < parseInt(b.weight, 10)) return 1;
              if (parseInt(a.weight, 10) > parseInt(b.weight, 10)) return -1;
              return 0;
            })
          : orderedBreedsAD.sort((a, b) => {
              if (parseInt(a.weight, 10) < parseInt(b.weight, 10)) return -1;
              if (parseInt(a.weight, 10) > parseInt(b.weight, 10)) return 1;
              return 0;
            }) 
      return {
        ...state,
        filteredBreeds: 
          action.payload === ALL ? state.filteredesBreeds : sortedBreedsAD,
      };
    case POST_DOG: {
      return {
        ...state,
      };
    }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
}
