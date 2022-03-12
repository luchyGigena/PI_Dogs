import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_VALUE ='FILTER_BY_VALUE';
export const FILTER_CREATED ='FILTER_CREATED';
export const FILTER_TEMPERAMENT ='FILTER_TEMPERAMENT';
export const SEARCH_NAME ='SEARCH_NAME';
export const DOGS_DETAIL ='DOGS_DETAIL';
export const POST_DOG='POST_DOG'


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
export const searchName = (name)=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then((data) =>{
            return dispatch({
                type: SEARCH_NAME,
                payload: data.data
            })
        })
    }

}

export function dogsDetail(id) {
    return async (dispatch)=>{
    const json = await axios.get(`http://localhost:3001/dogs/${id}`)
    console.log('que tre json',json)
    return dispatch({
                type: DOGS_DETAIL,
                payload: json.data
            
            })
           
    } 
}

//recibe el payload ue es lo que ingresa el us. por el front
export const postDog =({name, heightMin , heightMax,weightMin,weightMax,years,temperament }) =>{
    return async ( dispatch) =>{
        await axios.post('http://localhost:3001/dogs/CreateDog',{
            name,
            height: heightMin + ' - ' +heightMax,
            weight: weightMin + ' -' + weightMax,
            lifeSpan: years + "years",
            temperament,

        })
        dispatch({
            type: POST_DOG
        })
    }}


   // export function cleanQ(payload) {
     //   return {
       //   type: CLEAN_Q,
         // payload,
        //}ssssssss
    //}