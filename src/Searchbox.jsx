import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox({updateinfo}){
    let [city, setcity] = useState("");
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEYS= "44ea4633225411f417ee1da89afe19b0";

    let getweatherinfo= async() => {
       let response = await fetch(`${API_URL}?q={city}&appid=${API_KEYS}&units=metric`);
       let jsonresponse = await response.json();
      
       let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempmin : jsonresponse.main.temp_min,
        tempmax : jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike : jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,

       };
       console.log(result);
       return result;
    };
   

    let handlechange = (evt) => {
        setcity(evt.target.value);
    };

    let handlesubmit= async (evt) =>{
        evt.preventDeafult();
        console.log(city);
        setcity("");
       let info=await getweatherinfo();
       updateinfo(info);
    };
return(

    
    <div className="Searchbox1">
        <form onSubmit={handlesubmit}>
        <TextField id="city" label="City Name" variant="outlined"  required value={city}
        onChange={handlechange}/>
        <br>
        </br><br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">Search</Button>
        </form>
    </div>
    
);
}