import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';
export default function Searchbox(){
    let [city, setcity] = useState("");

    let handlechange = (evt) => {
        setcity(evt.target.value);
    };

    let handlesubmit= (evt) =>{
        evt.preventDeafult();
        console.log(city);
        setcity("");
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