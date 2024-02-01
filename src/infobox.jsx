import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Infobox({info})
{
    const INIT_URL = "https://images.unsplash.com/photo-1606044466411-207a9a49711f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
    <div className="infobox">
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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