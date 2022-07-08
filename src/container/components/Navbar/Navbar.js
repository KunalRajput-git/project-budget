import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  ProjectOutlined,
  StockOutlined,
} from "@ant-design/icons";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navHeroHeading">
        <ProjectOutlined /> PROJECT
      </h2>
      <ul>
        <li>
          <NavLink to="/" className="SignOutBtn">
            <HomeOutlined /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/graphcard" className="SignOutBtn">
            <StockOutlined /> Graph
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
