import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';

const Pagination = ({ nPages, currentPage, setCurrentPage}) => {


    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const goToNextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
                <li className="page-item">
                        Previous
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >
                            {pgNumber}
                    </li>
                ))}
                <li className="page-item">        
                        Next
                </li>
            </ul>
    </div>
  )
}

export default Pagination
