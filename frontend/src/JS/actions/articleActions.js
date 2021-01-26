import {GET_ARTICLE ,ARTICLE_ERR ,ADD_ARTICLE } from '../constants/actionTypes' ;
import axios from 'axios';
//ADD A NEW Article
//PATH : /add_Article
//RESPONSE : new article 
export const addArticle =(newArticle)=> (dispatch)=>{
    axios
    .post("/api/add_Article" , newArticle)
    .then((res)=>
    dispatch({
        Type : ADD_ARTICLE ,
        payload : res.data
    })).catch((err)=>alert("ADD_ERROR"))
    }


/*************** */
//GET ALL Article
// PATH :/articles
//RESPONSE :articles 



/*************** */
//DELETE article BY ID
//PATH : /articles/:articleID
export const removeArticles=(id)=>  (dispatch) =>{
     axios
     .remove(`/articles/${id}`)
     .then((res)=>(getArticles()))   
     .catch((err)=>{
          alert("Error delete")
      });

        };
       

/********** */
//UPDATE ARTICLE BY ID
//PATH : /articles/:articleID
//RESPONSE : the edited user

export const getArticles=()=>  async dispatch =>{
try{
    const res= await axios.get("/api/articles")
        dispatch({
            type : GET_ARTICLE ,
            payload : res.data ,
        })
    }
   

catch(err){ 
    dispatch( {
        type : ARTICLE_ERR ,
        payload : {msg : "Error add" }

    })
}

}



















//