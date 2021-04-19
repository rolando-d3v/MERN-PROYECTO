import React, { useEffect, useState } from "react";
import Tabla from "../../components/tabla/Tabla";
import clienteAxios from "../../api/clienteAxios";
import PaginationPoke from "../../components/pagination/PaginationPoke";

function TablaPoke() {
  const [dataTable, setDataTable] = useState([]);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);

  const obtenerData = async () => {
    const res = await clienteAxios.get(`/productos?page=${page}&limit=12`);
    setDataTable(res.data.docs);
    setTotal(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    obtenerData();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div>
        <h2 className="text-center my-3">Lista de Pokemos</h2>
        <PaginationPoke
          currentPage={page}
          totalItems={total.totalDocs}
          onChangePage={onChangePage}
        />
      </div>
      <Tabla dataTable={dataTable} />
    </div>
  );
}

export default TablaPoke;
