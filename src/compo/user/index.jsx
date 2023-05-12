
import React from "react";
import './user.css'
export const User =({color,el})=>{
    return <div className="user-card">
        <div className="avatar">
            <img className="avatar" src={el.img} alt="" />
        </div>
        <b>{el.full_name}</b>
    </div>
}