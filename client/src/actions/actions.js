import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';


export function getDogs(){
    return async function (dispach){
        let res =await axios.get("http://localhost:3001/dogs");
        console.log('res', res)
        return dispach({
            type: GET_DOGS,
            payload: res.data, //LO QUE ME VA A CARGAR
        })
    }
}