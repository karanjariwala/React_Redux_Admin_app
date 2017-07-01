import * as actionTypes from './actionTypes.js';
import authorApi from '../api/mockAuthorApi.js';
import {beginAjaxCall} from './ajaxStatusActions.js'



export function loadAuthorsSuccess(authors) {
  debugger;
  return {type:actionTypes.LOAD_AUTHORS_SUCCESS,authors}

}

export function loadAuthors(){
  debugger;
  return function(dispatch){
    dispatch(beginAjaxCall())
     return authorApi.getAllAuthors().then(authors=>{
      dispatch(loadAuthorsSuccess(authors))
    }).catch(error=>{
      throw(error);
    })
  }

}
