import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions.js';
import CourseList from './CourseList.js'
import {browserHistory} from 'react-router';
// import PropTypes from 'prop-types'
class CoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      course:{title:""}
    };
this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);
  }

redirectToAddCoursePage(){
  browserHistory.push('/course');
}

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }
  render(){
    const {courses} =this.props;
    debugger;
    return(
      <div>
        <h1> Courses</h1>
        <input type='submit'
                value='Add Course'
                className='btn btn-primary btn-sm'
                onClick={this.redirectToAddCoursePage}/>

        <CourseList courses={courses}/>

      </div>
    );
  }
}

CoursePage.propTypes={
  actions:PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
  debugger;
  console.log(state);
  return{
    courses:state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
