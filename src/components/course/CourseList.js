import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow.js';

const CourseList =({courses})=>{
  return(
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th> Author</th>
        <th> category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course=>
      <CourseListRow key={course.id} course={course}/>
      )}
      </tbody>
    </table>
  )
}

export default CourseList;
