import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_VALUE ='FILTER_BY_VALUE';
export const FILTER_CREATED ='FILTER_CREATED';
export const FILTER_TEMPERAMENT ='FILTER_TEMPERAMENT'


export function getDogs(){
    return async function (dispach){
        let res = await axios.get("http://localhost:3001/dogs");
        console.log('res', res)
        return dispach({
            type: GET_DOGS,
            payload: res.data, //LO QUE ME VA A CARGAR
        })
    }
}

export function getTemperament(){
    return async function (dispach){
        let temp = await axios.get("http://localhost:3001/temperament")
        console.log('temp', temp)
        return dispach({
            type: GET_TEMPERAMENTS,
            payload: temp.data,
             
        })
    }
}

export function filterByValue(payload){
    return{
        type: FILTER_BY_VALUE,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}
export function filterbyTemperament(payload){
    return{
        type:FILTER_TEMPERAMENT,
        payload
    }

}