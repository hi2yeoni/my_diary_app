import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
    const activeHomeStyle = {
        //oododooododoooo
    }
    return (
        <div>
            <div className="category">
                <Link to="/" className="head">
                    <span className="title">My Diary</span>
                </Link>
                <Link Link to="/calendar" className="memo">
                    <span className="text"> Calender</span>
                </Link>
                <Link Link to="/memo" className="memo">
                    <span className="text"> Memo</span>
                </Link>
            </div>
        </div>


    )
}
export default Category;