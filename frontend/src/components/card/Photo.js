import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./photo.scss";

export default function Photo({ e_pro }) {
  let url = process.env.REACT_APP_BACKEND_IMAGE;

  console.log(url);

  return (
    <div className="card_content  animate__animated animate__fadeIn">
      <img className="img_card" src={`${url}${e_pro.path}`} />
      <div className="card_body">
        <div>
          <h1 className="card_text">{e_pro.name} </h1>
          <h1 className="sub_text">{e_pro.description}</h1>
          <span className="sub_text"> Precio: {e_pro.precioUnitario} $</span>
          <p className="sub_text"> creado: {format(e_pro.createdAt)} </p>
        </div>
        <Link to={`/pokemon/${e_pro._id}`} className="card_btn">
          Ver Mas
        </Link>
      </div>
    </div>
  );
}
