import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Modal from '../components/CreateResearcherPopUp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ResearcherCard(props) {


  const surname  = props.researcher.nameAndSurname;
  const initials  = props.researcher.initials;
  const title  = props.researcher.title;
  const institution  = props.researcher.institution;
  const rating  = props.researcher.rating;
  const specialisations  = props.researcher.specialisation;

    const email  = props.researcher.email;
    const gender  = props.researcher.gender;
    const [modal, setModal] = useState(false);
  //console.log(specialisations)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const cardClicked = () => {
    console.log("card clicked")
    toggleModal();
    //alert("clicked..")
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={cardClicked} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${surname}`}
        subheader={institution}
      />
      {/*  
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      
      */}
      {
       
          <CardContent>
        <Typography variant="body2" color="text.secondary">
        <i>{specialisations}</i>
        </Typography>

        <Typography variant="body2" color="text.secondary">
        <strong>Specialisations : </strong>{gender}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {}
        <strong>Email : </strong>{email}
        </Typography>
      </CardContent>

      
      }
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
         
        </IconButton>
        {
            /* <Button variant="contained">Text</Button>
<IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
            */
        }
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {   
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">Specialisations:</Typography>
          <Typography paragraph>
            {specialisations}
          </Typography>
          {
            /*
              <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>

            */
          }
        </CardContent>
      </Collapse>
         }


         {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{marginTop:70}}><strong>{surname}</strong></h2>
            {
              /*
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            */}
            <Typography variant="body2" color="text.secondary">
        <i>{"Hey there"}</i>
        </Typography>

        <Typography variant="body2" color="text.secondary">
        <strong>Specialisations : </strong>   {specialisations}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
        <strong>Gender : </strong>   {gender}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        
        <strong>Email : </strong>   {email}
        </Typography>
            
            <button className="close-modal" onClick={toggleModal} >
              CLOSE
            </button>
          </div>
        </div>
      )}


    </Card>
  );
}
