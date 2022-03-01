import { GET_DOGS } from "../actions/actions";


const initialState={
    dogs : [],
    backupDogs: []

}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                backupDogs: action.payload,
            };
        default:
            return state    







    }
}
export default rootReducer;