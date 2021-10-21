import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate';

function Pagination({pageCount, pageRangeDisplayed, marginPagesDisplayed}) {
  return (
    <div id="react-paginate">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        previousLabel='<'
        nextLabel='>'
      />
    </div>
  )
}

Pagination.propTypes = {

}

export default Pagination

