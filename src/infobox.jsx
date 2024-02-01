import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import './infobox.css';
export default function Infobox({info})
{
    const INIT_URL = "https://images.unsplash.com/photo-1606044466411-207a9a49711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL ="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL= "https://images.unsplash.com/photo-1611849720532-dc03b372aa12?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rainy_URL = "https://images.unsplash.com/photo-1567688993206-43c34131b21f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
    <div className="infobox">
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? Rainy_URL : info.temp> 20 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity >80 ?<ThunderstormIcon/> : info.temp>20 ? <WbSunnyIcon />:<AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C </p>
         <p> Humidity = {info.humidity}</p>
            <p> Min_temperature = {info.tempmin}&deg;C</p>
            <p> Max_temperature= {info.tempmax}&deg;C</p>
            <p> The weather can be described as <i>{info.weather} </i> and feels_like= {info.feelslike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
    );
}