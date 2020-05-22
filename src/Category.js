import React from "react";
import "./Category.css";

const Category = () => {
    return (
        <div className="category">
            <div className="head">
            <span className="title">My Diary</span>
            </div>
            <div className="memo">
               <span className="text">📆 Calender</span> 
            </div>
            <div className="memo">
            <span className="text">📋   Memo</span>
            </div>
            
        </div>
       

    )
}
export default Category;