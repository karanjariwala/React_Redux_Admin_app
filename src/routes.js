import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage.js';
import AboutPage from './components/about/AboutPage.js';
import CoursePage from './components/course/CoursesPage.js';
import ManageCoursePage from './components/course/ManageCoursePage.js'
export default(
  <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="courses" component={CoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
      <Route path="course" component={ManageCoursePage}/>
  </Route>
);
