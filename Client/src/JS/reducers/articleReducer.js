import {ARTICLE_ERR, GET_ARTICLE , DELETE_ARTICLE , ADD_ARTICLE} from '../constants/actionTypes' ;
const initialState ={
    articles :[   
    ] ,
    loading : true 
};
const articleReducer =(state = initialState , action)=> {
    switch(action.type){
        case GET_ARTICLE:
        return {...state , loading :false , articles : action.payload };
        case ARTICLE_ERR:
            return {...state , loading : false , articles : null}
        // case DELETE_ARTICLE : {
            // const _id = action.payload.data._id;
            // return {
            //   ...state, loading : false ,
            //   articles: state.contacts.filter(item => item._id !== _id)
            // }
        // }
        case ADD_ARTICLE:
            return{...state , loading : false , articles :[...state.articles , action.payload] 
            }
          
       default : 
       return  state ;
       
    }
};
export default articleReducer;