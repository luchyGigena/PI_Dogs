import { GET_DOGS, GET_TEMPERAMENTS, FILTER_BY_VALUE, FILTER_CREATED ,FILTER_TEMPERAMENT , SEARCH_NAME, DOGS_DETAIL, POST_DOG, ORDER_NAME} from "../actions/actions";


const initialState={
    dogs : [],
    backupDogs: [],
    temperament: [],

    detail: []
}

function rootReducer (state = initialState, action){
    switch(action.type){

        case GET_DOGS: // my type
            return{
                ...state, // guardo el estado
                dogs: action.payload, //en mi estado que esta vacio, manda todo lo que te de el resultado de la action
                backupDogs: action.payload,
            };
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            }; 
        
        case ORDER_NAME:
         let sortedArr = action.payload === "AZ" ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          :  state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
            return {
              ...state,
              dogs: sortedArr,
            };
            


        case FILTER_BY_VALUE:
            
                let sortedArr2 = action.payload === "HIGH" ? state.dogs.sort(function (a, b) {
                        if (Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])) {
                          return -1;
                        }
                        if ( Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])) {
                          return 1;
                        }
                        return 0;
                      })
                    :  state.dogs.sort(function (a, b) {
                        if (Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])) {
                          return 1;
                        }
                        if (Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])) {
                          return -1;
                        }
                        return 0;
                      });
                      return {
                  ...state,
                  dogs: sortedArr2,
                };
        
      
        case FILTER_CREATED:     
        let createFilter = action.payload === 'CREATED'
        ? state.backupDogs.filter((e)=> e.createInDb)
        : state.backupDogs.filter((e)=> !e.createInDb) 
        return{
          ...state,
          dogs: action.payload === 'ALL' ? state.backupDogs : createFilter
        };
        
        case FILTER_TEMPERAMENT :
          const allDogs = state.backupDogs
          let temperamentFilter =  action.payload === 'ALL' ? allDogs  : allDogs.filter((temp)=> temp.temperament?.includes(action.payload))
          return{
            ...state,
            dogs: temperamentFilter
          }


        case SEARCH_NAME: 
        return{
          ...state,
          dogs: action.payload
        }

        case DOGS_DETAIL:
          return{
            ...state,
            detail: action.payload
          };
        case POST_DOG:
          return{
            ...state
          }
          
        default:
            return state    


    }
}
export default rootReducer;