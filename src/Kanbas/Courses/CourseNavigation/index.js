import { Link, useParams, useLocation } from "react-router-dom";
import { FaFile} from "react-icons/fa";


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="course-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`course-nav-item ${pathname.includes(link) && "active"}`}>
          {link}
          <br></br>
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;