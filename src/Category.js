import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";

const Category = () => {
    const activeHomeStyle = {
        //oododooododoooo
    }
    return (
        <div>
            <div className="category">
                <NavLink to="/" className="head">
                    <span className="title">My Diary</span>
                </NavLink>
                <NavLink Link to="/calendar" className="memo">
                    <span className="text"> Calender</span>
                </NavLink>
                <NavLink Link to="/memo" className="memo">
                    <span className="text"> Memo</span>
                </NavLink>
            </div>
        </div>


    )
}
export default Category;