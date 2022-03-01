import { GET_DOGS, GET_TEMPERAMENTS } from "../actions/actions";


const initialState={
    dogs : [],
    backupDogs: [],
    temperament: [],


}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                backupDogs: action.payload,
            };
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            };    
        default:
            return state    







    }
}
export default rootReducer;