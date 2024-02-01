import { useState } from 'react';
import Searchbox from './Searchbox';
import Infobox from './infobox';
import './Weatherapp.css';
export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]= useState({
        city:"Paris",
        feelslike:24.84,
        temp:25.05,
        tempmin:25.05,
        tempmax:25.05,
        humidity:27,
        weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setweatherinfo(newInfo);
    };
    return(
        <div className="Weatherapp">
            
             <Searchbox updateInfo={updateInfo} />
             <Infobox info={weatherinfo}/>
        </div>
    )
}