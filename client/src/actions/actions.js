import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';


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