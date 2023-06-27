import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';

const MoviePagination = (props) => {
    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage);
    
    const pagesCount = Math.ceil(itemsCount / pageSize);
    console.log('page count', pagesCount);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1)
  return (
    <div>
    <nav style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}} aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
            <li key={page} className={page ===  currentPage ? "page-item active" : 'page-item'}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
        ))}
      </ul>
    </nav>
    </div>
    // <Pagination style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
    //     {pages.map(page => (
    //         <Pagination.Item onClick={() => onPageChange(page)}>{page}</Pagination.Item>
    //     ))}
    //   {/* <Pagination.Item active>{1}</Pagination.Item>
    //   <Pagination.Item>{2}</Pagination.Item>
    //   <Pagination.Item>{3}</Pagination.Item>
    //   <Pagination.Item>{4}</Pagination.Item>
    //   <Pagination.Item>{5}</Pagination.Item> */}
    // </Pagination>
  );
};

MoviePagination.propTypes = {
    itemsCount:PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
}

export default MoviePagination;
