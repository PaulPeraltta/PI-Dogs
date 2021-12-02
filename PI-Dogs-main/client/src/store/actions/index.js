import axios from 'axios';

export const FETCH_BREEDS = 'FETCH_BREEDS';
export const SEARCH_BREEDS = 'SEARCH_BREEDS';
export const SORT_ALF = 'SORT_ALF';
export const SORT_AD = 'SORT_AD';

export function fetchBreeds() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/dogs')
        .then(breeds => {
            dispatch({
                type: FETCH_BREEDS,
                payload: breeds.data
            })
        })
        .catch((err) => {
            console.log(err); 
        })
    }
    
}

export function searchBreeds(search) {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/dogs?name='+search)
        .then(breeds => {
            dispatch({
                type: SEARCH_BREEDS,
                payload: breeds.data
            })
        })
        .catch((err) => {
            console.log(err); 
        })
    }
}

export function sortAlf(order) {
    return {
        type: SORT_ALF,
        payload: order
    }
}

export function sortAD(order) {
    return {
        type: SORT_AD,
        payload: order
    }
}