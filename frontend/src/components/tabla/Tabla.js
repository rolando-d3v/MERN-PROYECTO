import React from "react";
import {Table} from 'react-bootstrap'
// import dayjs from 'dayjs'
import { format } from 'date-fns'
import './tabla.scss'


export default function Tabla(props) {

  const  {dataTable} = props


  return (
      <div className='container_table' >
      <table className='div_table'>
        <thead className='head_table' >
          <tr>
            <th>#</th>
            <th>Name Pokemon</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        {dataTable.map((table, index)=> (
          <tbody className='body_table' key={table._id} >
          <tr>
            <td>{index} </td>
            <td> {table.name} </td>
            <td> {table.description} </td>
            <td>{format(new Date(table.createdAt), 'dd/MMM/yyyy - kkmm-aaaa')}</td>
            <td>{table.precioUnitario}</td>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  );
}


