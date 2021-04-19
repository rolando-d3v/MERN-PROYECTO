import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.scss";
// import { FaIndent, FaOutdent } from "react-icons/fa";
import "./sidebar.scss";
import { useContext } from "react";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import Dropdown from "../dropdown/Dropdown";
import AuthContext from "../../context/auth/authContext";

const linkSidebar = [
  { name: "Home", url: "/tabla", icon: <FaIcons.FaHome /> },
  { name: "Tools", url: "/", icon: <FaIcons.FaTools /> },
  { name: "Formulario", url: "/preguntas", icon: <FaIcons.FaFolder /> },
  { name: "Calendario", url: "/tabla", icon: <FaIcons.FaCalendarAlt /> },
];

export default function Sidebar() {
  const { toggle, toggleState } = useContext(ToggleConten);
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{ display: !user.logged && "none" }}
      className={`sidebar ${toggleState ? "sidebar-visible" : ""}`}
    >
      <div className="header_logo">
        <div>
          <FaIcons.FaApple style={{ fontSize: "1.5rem" }} />
          <h2 className='text_logo'  >Dashboar</h2>
        </div>
      </div>

      <div className="header_avatar">
        <div>
          <img src="/assets/avatar.jpg" alt="alt" />
          <span>Admin</span>
        </div>
      </div>

      <div className="div_buttonx">
        <button className="buttonx">Dashboar</button>
        <button className="buttonx">theme</button>
      </div>

      <div className="div_links">
        {linkSidebar.map((li, index) => (
          <Link className="sidebar_link" key={index} to={li.url}>
            {li.icon} {li.name}
          </Link>
        ))}
      </div>

      <Dropdown />
    </div>
  );
}
