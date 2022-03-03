import { GET_DOGS, GET_TEMPERAMENTS, FILTER_BY_VALUE, FILTER_CREATED ,FILTER_TEMPERAMENT , SEARCH_NAME} from "../actions/actions";


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
        
        
        case FILTER_BY_VALUE:
                let info = state.backupDogs;
                let sortedArr =
                  action.payload === "AZ"
                    ? info.sort(function (a, b) {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (b.name > a.name) {
                          return -1;
                        }
                        return 0;
                      })
                    : action.payload === "ZA"
                    ? info.sort(function (a, b) {
                        if (a.name > b.name) {
                          return -1;
                        }
                        if (b.name > a.name) {
                          return 1;
                        }
                        return 0;
                      })
                    : action.payload === "HIGH"
                    ? info.sort(function (a, b) {
                        if (
                          Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
                        ) {
                          return -1;
                        }
                        if (
                          Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
                        ) {
                          return 1;
                        }
                        return 0;
                      })
                    : info.sort(function (a, b) {
                        if (
                          Number(a.weight.split("-")[0]) > Number(b.weight.split("-")[0])
                        ) {
                          return 1;
                        }
                        if (
                          Number(b.weight.split("-")[0]) > Number(a.weight.split("-")[0])
                        ) {
                          return -1;
                        }
                        return 0;
                      });
                return {
                  ...state,
                  dogs: sortedArr,
                };
        
      
        case FILTER_CREATED:     
        let cb = state.backupDogs;
        let createFilter = action.payload === 'CREATED'
        ? cb.filter((e)=> e.createInDb)
        : cb.filter((e)=> !e.createInDb) 
        return{
          ...state,
          dogs: action.payload === 'ALL' ? state.backupDogs : createFilter
        };
        
        case FILTER_TEMPERAMENT :
          let alldogs = state.backupDogs;
          let temperamentFilter = action.payload === 'ALL' ? alldogs 
          : alldogs.filter((temp)=> temp.temperament?.includes(action.payload))
          return{
            ...state,
            dogs: temperamentFilter,
          }
        case SEARCH_NAME: 
        return{
          ...state,
          dogs: action.payload
        }

          
        default:
            return state    







    }
}
export default rootReducer;