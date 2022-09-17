import React from "react";
import { Link } from "react-router-dom";
export default function HeaderComponent(props){
    
    return (
        <div><header>
            <h1>{props.title}</h1>
        <nav>
            {/* <a href="#">{props.navItems[0]} </a>&nbsp;&nbsp;&nbsp;
            <a href="#">{props.navItems[1]} </a>&nbsp;&nbsp;&nbsp;
            <a href="#">{props.navItems[2]} </a>&nbsp;&nbsp;&nbsp;
            <a href="#">{props.navItems[3]} </a>&nbsp;&nbsp;&nbsp; */}
{
            props.navItems.map((item)=>{
         return(<Link to={item.urlName} key={item.urlName}>{item.displayName}</Link>
         )
            })
        }           
        </nav>
        </header>
        </div>
    )
}