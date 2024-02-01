import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox(){
    let [city, setcity] = useState("");
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEYS= "44ea4633225411f417ee1da89afe19b0";

    let getweatherinfo= async() => {
       let response = await fetch(`${API_URL}?q={city}&appid=${API_KEYS}&units=metric`);
       let jsonresponse = await response.json;
      
       let result = {
        temp: jsonresponse.main.temp,
        tempmin : jsonresponse.main.temp_min,
        tempmax : jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike : jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,

       };
       console.log(result);
    };
   

    let handlechange = (evt) => {
        setcity(evt.target.value);
    };

    let handlesubmit= (evt) =>{
        evt.preventDeafult();
        console.log(city);
        setcity("");
        getweatherinfo();
    };
return(

    
    <div className="Searchbox1">
       <h3>Know the weather of your city</h3> 
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