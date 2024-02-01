import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox({updateInfo}){
    let [city, setcity] = useState("");
    let [error,seterror]= useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEYS= "44ea4633225411f417ee1da89afe19b0";

    let getweatherinfo= async() => {
        try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEYS}&units=metric`);
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
    }catch(err){
        throw err;
    }
    };
   

    let handlechange = (evt) => {
        setcity(evt.target.value);
    };

    let handlesubmit= async (evt) =>{
        try{
        evt.preventDefault();
        console.log(city);
        setcity("");
       let newInfo=await getweatherinfo();
       updateInfo(newInfo);
        }catch(err){
            seterror(true);
        }
    };
return(

    
    <div className="Searchbox1">
        <form onSubmit={handlesubmit}>
            <h1>Enter city name: </h1>
        <TextField id="city" label="City Name" variant="outlined"  required value={city}
        onChange={handlechange}/>
        <br>
        </br><br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">Search</Button>
        {error && <p id="error">No such place exist</p>}
        </form>
    </div>
    
);
};