import React, {useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import clienteAxios from "../../api/clienteAxios";
import Swal from 'sweetalert2'
import Photo from "../../components/card/Photo";

function Buscar() {
  const [datax, setDatax] = useState([]);
  const [buscarData, setBuscarData] = useState("");

  const obtenerData = (e) => {
    setBuscarData(e.target.value);
  };

  const obtenerBusqueda = async () => {
    if (buscarData === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'El campo esta vacio',
          })
    } else {
      const res = await clienteAxios.get(`/productos/buscar/${buscarData}`);
      setDatax(res.data);
      console.log(res.data);
    }
  };

  return (
    <div className='m-5' >
      <h4>Buscar Pokemon</h4>
      <Form inline  >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={obtenerData}
        />
        <Button variant="outline-success"  onClick={() => obtenerBusqueda() } >
          Buscar Pokemon
        </Button>
      </Form>
      <div className="row mt-3">
        {datax.map((e_pro) => (
          <Photo key={e_pro._id} e_pro={e_pro} />
        ))}
      </div>
    </div>
  );
}

export default Buscar;
