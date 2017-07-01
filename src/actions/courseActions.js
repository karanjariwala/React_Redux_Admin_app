import * as actionTypes from './actionTypes.js';
import courseApi from '../api/mockCourseApi.js';
import {beginAjaxCall} from './ajaxStatusActions.js'
import {ajaxCallError} from './ajaxStatusActions.js'

export function createCourse(course){
  debugger;
  return {type:actionTypes.CREATE_COURSE,course};
}

export function loadCoursesSuccess(courses) {
  debugger;
  return {type:actionTypes.LOAD_COURSE_SUCCESS,courses}

}
export function createCourseSuccess(course) {
  return {type: actionTypes.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: actionTypes.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourse(){
  debugger;
  return function(dispatch){
    dispatch(beginAjaxCall())
     return courseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses))
    }).catch(error=>{
      throw(error);
    })
  }

}

export function saveCourse(course) {
  return function (dispatch, getState) {
dispatch(beginAjaxCall())
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error))
      throw(error);
    });
  };
}
