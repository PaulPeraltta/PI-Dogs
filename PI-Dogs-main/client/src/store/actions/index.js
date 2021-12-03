import axios from 'axios';

export const FETCH_BREEDS = 'FETCH_BREEDS';
export const SEARCH_BREEDS = 'SEARCH_BREEDS';
export const SORT_ALF = 'SORT_ALF';
export const SORT_WEIGHT = 'SORT_WEIGHT';
export const FILTER_BY_WEIGHT = 'FILTER_BY_WEIGHT';
export const FILTER_BY_AD = 'FILTER_BY_AD';

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

export function sortWeight(order) {
    return {
        type: SORT_WEIGHT,
        payload: order
    }
}


// ------------------------------------------------

export function filterDogsByWeight(payload) {
    return {
        type: FILTER_BY_WEIGHT,
        payload
    }
}

export function filterDogsByAD(payload) {
    return {
        type: FILTER_BY_AD,
        payload
    }
}