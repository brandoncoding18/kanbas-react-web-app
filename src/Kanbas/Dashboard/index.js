import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV} from "react-icons/fa";
import { FaFile} from "react-icons/fa";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  
  /*
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

*/

  return (
    <div>

      <h1>Dashboard</h1>
      <div className="row">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="p-0 col-5 col-md-4 col-xl-3">
                  <div class="card m-0">

                    <img src="/img/b.jpg" class="card-img-top"></img>
                    <div class="card-body"> 
                    <h5 class="card-title">
                    <h5 style={{color: "blue", textDecoration : "none"}}>{course.number} {course.name} </h5>
                      <h6>{course.number}</h6>
                      <br/>
                      {course.startDate} {course.endDate} <br/>
                      <FaFile style={{color : "grey"}}/>  <br/> <br/> 
                    </h5>
                    </div>
                  </div>

            
          </Link>
        ))}
      </div>

      <div>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
       onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button onClick={addNewCourse} className="btn btn-success">
        Add
      </button>
      <button onClick={updateCourse}className="btn btn-primary" >
        Update
      </button>

      <div className="list-group" style = {{backgroundColor : "white", color: "black"}}>
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"  style = {{backgroundColor : "white", color: "black", width : "550px", fontSize : "20px", textAlign : "left"}}>
            {course.name}      
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}className="btn btn-warning" >
              Edit
            </button>

            <button
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}className="btn btn-danger">
            Delete
            </button>

            
          </Link>
        ))}
      </div>

    </div>



    </div>
  );
}
export default Dashboard; 
