import React, { useState } from "react";

export default function ProjectsComponent(){
    const[countries,updateCountries]=useState([]);
    const getCountries=()=>{
        let apiurl="https://restcountries.com/v3.1/all";
        fetch(apiurl).then(response=>response.json())
        .then(response=>{updateCountries(response)})
    }
    
    return(<div>
        <header>
        <h1>World - Countries-DashBoard</h1>
        </header>
        <section className="dashboard"></section>
        <button onClick={(e)=>getCountries()}>View Countries Data</button>
        <div>
            {
               countries.length>0?countries.map(country=>{
                return<div>
                    {country.name.common}
                    <img src={country.flags.png} width='1%' height='1%'></img>
                    </div>
                
               }) :[]
            }

        </div>


    </div>)
}