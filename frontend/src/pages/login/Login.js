import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";
import { Link } from "react-router-dom";
import "./login.scss";


export default function Login({ history }) {
  const { user, dispatch } = useContext(AuthContext);
 

  let lastpath = localStorage.getItem("lastpath") || "/";

  const loginUser = () => {
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Rolando",
      },
    });
    history.replace(lastpath);
  };

  return (
    <div className="bg_login">
      <div className="container_login">
        <div className="div_login">
          <img
            className="logo"
            src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
            role="img"
            alt="Microsoft"
          />

          <div className="body_login">
            <h3 className="text_login">Escribir contraseña</h3>

            <div className="div_input">
              <input
                className="input_login"
                type="text"
                placeholder="alguien@example.com"
              />
            </div>

            <div className="div_input">
              <input
                className="input_login"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            <Link to="/login2" className="link_login">
              ¿Olvido su contraseña?{" "}
            </Link>
            <Link to="/login2" className="link_login">
              Iniciar sesion con una llave de seguridad
            </Link>
            <button className="btn_login" onClick={loginUser}>
              Siguiente
            </button>
          </div>
        </div>
      </div>

     <section className="footer_login">
     <p className="footer_text">Terminos de uso</p>
      <p className="footer_text">Privacidad y cookies  ...</p>
     </section>
    </div>
  );
}
