import { Link } from "react-router-dom";
import db from "../Database";
import React from 'react';
import { FaEllipsisV} from "react-icons/fa";
import { FaFile} from "react-icons/fa";

function Dashboard() {
  const courses = db.courses;
  const course_num = db.courses.length;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      
      <h2>Published Courses ({course_num})</h2>
      <hr/>
      <div className="list-course">
        {courses.map((course) => (
          <div className="row">
            
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-course-item" style={{textDecoration : 'none'}}>
      
            <div class="col-10 col-sm-1 col-md-4 col-lg-3 col-xl-2 col-xxl-1 bg-primary text-whit">
              {course.number} {course.name} 
              <br/>
              {course.number}
              <br/>
              {course.startDate} {course.endDate} <br/>
              <FaFile style={{color : "grey"}}/>  <br/> <br/> </div>
              

          </Link>
             </div>
          
          
        ))}
      </div>
      

      
    </div>
  );
}
export default Dashboard;