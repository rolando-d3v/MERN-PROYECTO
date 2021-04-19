import React from "react";
import Pagination from "rc-pagination";

import "./pagination.scss";

export default function PaginationPoke(props) {
  const { currentPage, totalItems, onChangePage } = props;

  return (
    <div className="col-12 pagi">
      <Pagination
        className="pagination"
        current={currentPage}
        total={totalItems}
        pageSize={12}
        onChange={onChangePage}
      />
    </div>
  );
}
