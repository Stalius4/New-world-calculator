import { useState } from "react";
import {MdLooksOne, MdLooksTwo, MdLooks3,MdLooks4,MdLooks5,MdLooks6, MdMoreHoriz} from "react-icons/md"

import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";


const Pagination = ({pageNumber, setPageNumber, filtConsumableList}) => {

 const clickOnPage =(number) => {


 }


    const nextPage = () => {
        console.log(pageNumber.firstIndex, "Lapas")
        if (filtConsumableList.length > pageNumber.lastIndex) {
          setPageNumber({
            firstIndex: pageNumber.firstIndex + 10,
            lastIndex: pageNumber.lastIndex + 10,
          });
        }
      };
    
      const previousPage = () => {
        console.log(pageNumber.firstIndex, "Lapas")
        if (pageNumber.firstIndex <= 0) {
        } else {
          setPageNumber({
            firstIndex: pageNumber.firstIndex - 10,
            lastIndex: pageNumber.lastIndex - 10,
          });
        }
      };

return(


<div className="both-page-btn">
     <AiOutlineCaretLeft color="77C3EC" size={15} onClick={previousPage} className="clickLeft"></AiOutlineCaretLeft>


     <MdLooksOne color={pageNumber.lastIndex === 10 ?"orange" :"77C3EC"} size={15} ></MdLooksOne>


     <MdMoreHoriz color="77C3EC" size={15}className={pageNumber.lastIndex >= 40 ? "display-inline" : "display-none"} ></MdMoreHoriz>


     <MdLooksTwo color={pageNumber.firstIndex === 10 ?"orange" :"77C3EC"} size={15} className={pageNumber.lastIndex < 40? "display-inline" : "display-none" } ></MdLooksTwo>
   
     <MdLooks3 color={pageNumber.firstIndex === 20 ?"orange" :"77C3EC"} size={15} className={pageNumber.lastIndex > 10 && pageNumber.lastIndex < 50? "display-inline" : "display-none" } ></MdLooks3>
     <MdLooks4 color={pageNumber.firstIndex === 30 ?"orange" :"77C3EC"} size={15} className={pageNumber.lastIndex >= 30? "display-inline" : "display-none" }></MdLooks4>
     <MdLooks5 color={pageNumber.firstIndex === 40 ?"orange" :"77C3EC"} size={15} className={pageNumber.lastIndex >= 40? "display-inline" : "display-none" }></MdLooks5>
     <MdMoreHoriz color="77C3EC" size={15}className={pageNumber.lastIndex >= 50 ? "display-none": "display-inline" } ></MdMoreHoriz>
     <MdLooks6 color={pageNumber.firstIndex === 50 ?"orange" :"77C3EC"} size={15} ></MdLooks6>
      <AiOutlineCaretRight color="77C3EC" size={15} onClick={nextPage} className="clickRight"></AiOutlineCaretRight>
      </div>




)

}

export default Pagination