import { useState } from 'react';
import Searchbox from './Searchbox';
import Infobox from './infobox';
export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]= useState({
        city:"Paris",
        feelslike:24.84,
        temp:25.05,
        tempmin:25.05,
        tempmix:25.05,
        humidity:27,
        weather:"haze",
    })

    let updateinfo = (newinfo) => {
        setweatherinfo(newinfo);
    };
    return(
        <div className="Weatherapp">
            
             <Searchbox updateinfo={updateinfo} />
             <Infobox info={weatherinfo}/>
        </div>
    )
}