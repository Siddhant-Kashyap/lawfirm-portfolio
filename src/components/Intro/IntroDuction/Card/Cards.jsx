import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import gift from "../../../../Assets/giftBox.svg"


const Cards = () => {
  return (
    <Card sx={{ maxWidth: 250,maxHeight:350,margin:2  ,backgroundColor:"#1D1D1D" , border:"0.5px solid white",color:"white",borderRadius:"15px"}}>
      
      <CardContent>
      <Avatar alt="gift" src={gift} />
        <Typography gutterBottom variant="h5" component="div">
          98% Success Rate
        </Typography>

        <Typography variant="body2" color="grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto libero magnam? Quidem eaque veritatis unde ullam qui, dolores modi a? Vitae magnam rerum cum natus culpa id iste aperiam!
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{
           width: "150px",
           height: "62px",
           borderRadius: "43px",
           border: "1px solid black",
           backgroundColor: "#E3B748",
           cursor: "pointer"
        }} >Read More</Button>
        
      </CardActions>
    </Card>
  )
}

export default Cards