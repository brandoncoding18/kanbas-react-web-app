import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import "../style.css"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const { pathname } = useLocation();
  const account_icon = <FaUserCircle color = "grey" size={40}/>;
  const dashboard_icon = <FaTachometerAlt color = "red" size={40}  />;
  const courses_icon = <FaBook color = "red" size={40} />;
  const calendar_icon = <FaCalendarAlt color = "red" size={40} />;

  var icons = {}
  icons["Account"] = account_icon
  icons["Dashboard"] = dashboard_icon
  icons["Courses"] = courses_icon
  icons["Calendar"] = calendar_icon




  return (
    <div className="list-group">
        <img src={require('./neulogo.png')} />     
        {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {icons[link]}
          <br></br>
          
          {link}
          
          
         
          

        </Link>
      ))}
      
    </div>
  );
}
export default KanbasNavigation;