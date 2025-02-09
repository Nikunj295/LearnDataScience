import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import reg from "../Other/Images/VisualHome.jpg";
import clas from "../Other/Images/clas.jpg";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
    {
      url: clas,
      title: 'Classification',
      width: '50%',
    },
    {
      url: reg,
      title: 'Regression',
      width: '50%',
    }
  ];
const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap'
},
image: {
    position: 'relative',
    height: window.innerHeight-55,
    [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
    },
    '&:hover, &$focusVisible': {
    zIndex: 1,
    '& $imageBackdrop': {
        opacity: 0.15,
    },
    '& $imageMarked': {
        opacity: 0,
    },
    '& $imageTitle': {
        border: '4px solid currentColor',
    },
    },
},
focusVisible: {},
imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
},
imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
},
imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
},
imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
},
imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
},
}));
  
export default function ChoiceMethod() {
    const [value, setValue] = React.useState(
        localStorage.getItem('myid') || ''
    );
     
    useEffect(() => {
        localStorage.setItem('myid', '_' + Math.random().toString(36).substr(2, 9));
    }, [value])

    const classes = useStyles();

    return (
        <div className={classes.root}>
        {images.map((image) => (
            <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width,
            }}
            >
            <Link to={`/${image.title}`} style={{ textDecoration: 'none', color:"inherit"}} >
                <span
                    className={classes.imageSrc}
                    style={{
                    backgroundImage: `url(${image.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                    component="span"
                    variant="h4"
                    color="inherit"
                    className={classes.imageTitle}
                    >
                    {image.title}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </Link>
            </ButtonBase>
        ))}
        </div>
    )
}
