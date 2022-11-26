import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


const nextPage = () => {
    console.log(pageNumbers)
if(pageNumbers.length> currentPage){
    setCurrentPage(currentPage+1)
   
}
}

const previousPage = () => {
    console.log(pageNumbers)
if( currentPage> 1){
    setCurrentPage(currentPage-1)
  
}
}

  return (
      <div className='both-page-btn'>
        <div className='prev-btn'><IoIosArrowBack onClick={()=> previousPage()} color='#00cbe9' size={25}></IoIosArrowBack></div>
        {pageNumbers.map(number => (
                <button key={number} className={number === currentPage ?'page-btn-active' :'page-btn'} onClick={() => paginate(number)} >  {number}</button>
        ))}
        <div className='next-btn'><IoIosArrowForward  onClick={()=> nextPage()} color='#00cbe9' size={25} ></IoIosArrowForward></div>
      </div>
  );
};

export default Pagination;