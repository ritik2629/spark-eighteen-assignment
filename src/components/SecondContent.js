import React,{useEffect, useState} from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';

import './Content.css'

const SecondContent=()=>{
    const [state,setState]=useState([]);
    const [sort, setsort] = useState(false);

    const sortViews=()=>{
      setsort(!sort);
      state.sort((a, b) => b.views - a.views);
    }

    const sortLikes=()=>{
      setsort(!sort);
      state.sort((a, b) => b.likes - a.likes);
    }

    const sortShares=()=>{
      setsort(!sort);
      state.sort((a, b) => b.shares - a.shares);
    }
    const sortDates=()=>{
      setsort(!sort);
      state.sort((a, b) => a.event_date - b.event_date);
    }

    const URL="http://www.mocky.io/v2/59ac28a9100000ce0bf9c236"
    useEffect(()=>{
        axios.get(URL).then((result)=>{
            // console.log(result.data.posts)
            setState(result.data.posts)
        })
    },[])
return(
  <div>
  <Stack spacing={2} direction="row" className="btn-mi">
  <Button variant="outlined" onClick={sortLikes}>Sort By Likes</Button>
  <Button variant="outlined" onClick={sortViews}>Sort By Views</Button>
  <Button variant="outlined" onClick={sortShares}>Sort By Shares</Button>
  <Button variant="outlined" onClick={sortDates}>Sort By Dates</Button>
  </Stack>
    <React.Fragment>
        {state.map((item)=>{
            const {id,thumbnail_image,event_name,event_date,views,likes,shares}=item;
            return (
                <article key={Math.random()} className="container">
                <Card sx={{ maxWidth: 645 }} key={event_name} className="card">
                  <CardHeader
                    title={event_name}
                    subheader={new Date(event_date).toString()}
                  />
                  <CardMedia
                    component="img"
                    height="594"
                    image={thumbnail_image}
                    alt={event_name}
                  />
                  <CardActions  className="social">
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                      <Typography>{likes}</Typography>
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon/>
                      <Typography>{shares}</Typography>
                    </IconButton>
                    <IconButton aria-label="visibilityIcon">
                      <VisibilityIcon/>
                      <Typography>{views}</Typography>
                    </IconButton>
                  </CardActions>
                </Card>
                </article>
              );
        })}
    </React.Fragment>
    </div>
)
}

export default SecondContent;