import React from 'react'
import ReactPaginate from 'react-paginate'

function paginationComponent() {
  return (
    <>
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          breakLabel="..."
          pageCount={8}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
        //   onPageChange={handlePageClick}
          containerClassName="pagination d-flex justify-content-center "
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          activeClassName="active"
        //   forcePage={page-1}
        />
    </>
  )
}

export default paginationComponent