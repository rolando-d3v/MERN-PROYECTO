import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import clienteAxios from "../../api/clienteAxios";
import "./formulario.scss";

export default function Formulario() {
  const [data, setData] = useState({
    name: "",
    description: "",
    precioUnitario: "",
  });

  const [fileData, setFileData] = useState("");

  const obtenerData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const subirData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("precioUnitario", data.precioUnitario);
    formData.append("photo", fileData);

    try {
      if (fileData.size > 4000000) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Error: 4MB de Tamaño maximo de Imagen admitida",
        });
      } else {
        const res = await clienteAxios.post("/productos", formData);
        console.log(res);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      }
    } catch (error) {}
  };

  //efecto de input label hacia arriba
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  return (
    <form className="form_create_poke" onSubmit={subirData}>
      <section className="div_input_poke">
        <span className="icon_poke">
          <FaIcons.FaUser className="" />
        </span>
        <div>
          <label className="label_form">Enter name</label>
          <input
            className="input"
            type="text"
            name="name"
            onChange={obtenerData}
            autoComplete="off"
          />
        </div>
      </section>

      <section className="div_input_poke">
        <span className="icon_poke">
          <FaIcons.FaUser className="" />
        </span>
        <div>
          <label className="label_form">Descripcion</label>
          <input
            className="input"
            autoComplete="off"
            type="text"
            name="description"
            onChange={obtenerData}
          />
        </div>
      </section>

      <section className="div_input_poke">
        <span className="icon_poke">
          <FaIcons.FaUser className="" />
        </span>
        <div>
          <label className="label_form">ingresa precio</label>
          <input
            className="input"
            type="number"
            // placeholder="ingresa precio"
            name="precioUnitario"
            onChange={obtenerData}
          />
        </div>
      </section>

      <section controlId="formBasicCheckbox">
        <label className="label_form">
          Imagen admitida <span className="font-weight-bold">(png o jpg)</span>{" "}
        </label>
        <input
          type="file"
          name="photo"
          accept="image/png, image/jpeg, image/jpg"
          onChange={obtenerFile}
        />
      </section>
      <button className="xbutton_primary" type="submit">
        crear Poke
      </button>
      <button className="button_p_primary" type="submit">
        crear Poke
      </button>
      <button className="button_p_success" type="submit">
        crear Poke
      </button>
    </form>
  );
}
