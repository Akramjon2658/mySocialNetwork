import React from "react";
import s from "./users.module.css";
import User from "./User"
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator"

let Users = (
  {totalUsersCount, 
    pageSize, 
    currentPage, 
    onPageChanged, 
    followingInProgress, 
    follow, 
    unfollow, 
    isFetching, 
    users}) => {
    return (
      <div className={s.users}>
      <Paginator 
        totalUsersCount={totalUsersCount} 
        pageSize={pageSize} 
        currentPage={currentPage} 
        onPageChanged ={onPageChanged}/>

      {isFetching ? <Preloader /> : null}
      
      {users.map(user => (
        <User user={user} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>
      ))}
    </div>
  );
};
export default Users;
