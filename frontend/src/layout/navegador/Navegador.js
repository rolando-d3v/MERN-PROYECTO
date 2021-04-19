import React, { useContext } from "react";
import { FaIndent, FaOutdent } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { types } from "../../context/auth/types";
import AuthContext from "../../context/auth/authContext";
import "./navegador.scss";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import { DarkContext } from "../../context/darkContext/DarkContext";

export default function Navegador() {
  const { user, dispatch } = useContext(AuthContext);
  const { toggle, toggleState } = useContext(ToggleConten);
  const { toggleBoolean, toggleTheme } = useContext(DarkContext);

  console.log(user);
  const history = useHistory();

  const navLink = [
    { name: "Home", url: "/preguntas" },
    { name: "Contact", url: "/" },
  ];

  const exitUser = () => {
    dispatch({
      type: types.LOGOUT,
    });
    history.replace("/login");
  };

  return (
    <nav
      style={{ display: !user.logged && "none" }}
      className="nav_container"
      // sticky="top"
    >
      <div>
        <div className="nav_seccion1">
          {toggleState ? (
            <FaOutdent className="sidebar__close " onClick={toggle} />
          ) : (
            <FaIndent className="sidebar__close " onClick={toggle} />
          )}

          {navLink.map((link, index) => (
            <Link className="nav_link" key={index} to={link.url}>
              {link.name}
            </Link>
          ))}

          <section className="contenedor_input">
            <input className="input_search" type="text" placeholder="Buscar" />
            <FaIcons.FaSearch className="icon_search" />
          </section>
        </div>

        <div className="nav_seccion2">
          <section
            className="div_use_dark"
            onClick={toggleTheme}
            style={{ backgroundColor: `${toggleBoolean ? "aqua" : "yellow"}` }}
          >
            <FaIcons.FaMoon className="icon_search" />
            <FaIcons.FaSun className="icon_search" />
            {/* <span className='togg'   ></span> */}
            <span
              className={`togg ${toggleBoolean ? "toggTrue" : "toggFalse "} `}
            ></span>
          </section>

          <button className="btn_exit" onClick={exitUser}>
            salir
          </button>

          {toggleState ? (
            <FaOutdent className="sidebar__close2 " onClick={toggle} />
          ) : (
            <FaIndent className="sidebar__close2 " onClick={toggle} />
          )}
        </div>
      </div>
    </nav>
  );
}
