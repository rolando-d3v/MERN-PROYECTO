import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";
import "./login2.scss";

export default function Login2({ history }) {
  const [categoria, setCategoria] = useState("");
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

  const selectData = [
    { id: 1, name: "Peru - (51)" },
    { id: 2, name: "Brasil - (105)" },
    { id: 3, name: "Argentina - (55)" },
    { id: 4, name: "Colombia - (15)" },
    { id: 5, name: "Francia - (25)" },
    { id: 6, name: "Cuba - (125)" },
  ];

  return (
    <div
      className="bg_login2"
      style={{ backgroundImage: `url('assets/bg.jpg')` }}
    >
      <div className="container_login2">
        <div className="div_login">
          <img
            className="logo"
            src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
            role="img"
            alt="Microsoft"
          />

          <div className="body_login">
            <h3 className="text_login">Necesitamos comprobar tu identidad</h3>
            <h3 className="text_label">
              Escribre tu numero de telefono para enviarte un codigo de
              seguridad
            </h3>

            <select
              className="div_input_select"
              as="select"
              // value="pais"
              onChange={(e) => setCategoria(e.target.value)}
              value={categoria}
            >
              <option value=""> Selecciona tu Pais </option>
              {selectData.map((sele) => (
                <option value={sele.name} key={sele.id}>
                  {sele.name}
                </option>
              ))}
            </select>

            <div className="div_input">
              <input
                className="input_login"
                type="text"
                placeholder="Numero de telefono"
              />
            </div>

            <h3>Comprobar el telefono mediante</h3>
            <div className='div_check' >
              <input className='input_check' type="radio" name="Mensaje de texto" id="m" />
              <label>Mensaje de texto</label>
            </div>
            <div className='div_check' >
              <input className='input_check' type="radio" name="llamada" id="ll" />
              <label>Llamada</label>
            </div>

            <button className="btn_login" onClick={loginUser}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
