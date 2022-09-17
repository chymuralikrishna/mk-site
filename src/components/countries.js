import React, { useEffect, useState } from "react";

export default function CountriesComponent() {
    const [countries, setCountries] = useState([]);
    let region='asia';
    useEffect(() => {
        let apiurl = "https://restcountries.com/v3.1/region/".concat('asia');
        fetch(apiurl)
            .then(response => response.json())
            .then(response => { setCountries(response) });
    }, []);

    const regionChange=(e) => {
        var  apiurl = "https://restcountries.com/v3.1/region/".concat(e.target.value);
        fetch(apiurl)
            .then(response => response.json())
            .then(response => { setCountries(response) });
    };

    return (<div>
        <select name='region' id='region' onChange={regionChange} value={region}>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            
            <option value='asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            Americas
            
        </select>
        <div className="countriesdashboard">
            {
                countries.length > 0 ? countries.map((country, index) => {
                    return <div key={index}>
                        {country[index]}
                        <h3>{country.name.common}</h3>
                        <img src={country.flags.png} />
                    </div>
                }) : "No Records"
            }
        </div>
    </div>
    )
}