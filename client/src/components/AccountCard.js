import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import accountCard from '../images/accountCard.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    cardMargin: {
        margin: 10,
        width: 350,
    }
});

const AccountCard = (props) => {
    const {auth} = useContext(AuthContext);

    const classes = useStyles();

    return (
        <>
            {props.urlList.map((value, index) => {
                return (
                    <Card className={classes.root,classes.cardMargin}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={accountCard}
                        title=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.resume ? `Resume${index+1}` : `CV${index+1}`}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href={value.Url.Url} target="_blank">
                            VIEW
                        </Link>
                    </CardActions>
                    </Card>
                );
            })}
        </>
    );
}

export default AccountCard;
