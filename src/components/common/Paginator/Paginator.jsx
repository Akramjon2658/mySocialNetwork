import React, { useState } from 'react'
import s from "./paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 15}) => {
  let pages = [];
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pageCount; i++ ) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; 
  let rightPortionPageNumber = portionNumber * portionSize; 

  return <div className={s.pages}>
        { portionNumber > 1 && 
          <button className= "btn btn-primary" onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
        }
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
          return (
            <span
              className={currentPage === p && s.currentPage}
              onClick={() => onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
        { portionNumber < portionCount &&
          <button className="btn btn-primary" onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
        }
        </div>
}
export default Paginator;