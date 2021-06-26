import React, { useContext } from 'react';
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
import {DeleteContext} from '../DeleteContext';


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

const AccountCard = () => {

    const classes = useStyles();

    const {urlList,RList,CList,resume,setUrl,setRList,setCList} = useContext(DeleteContext);

    const items1 = [];
    const id1 = []; 
    const items2 = [];
    const id2 = [];

    RList.map((value,index) => {
        items1.push(value.title);
        id1.push(value._id);
    });

    
    CList.map((value,index) => {
        items2.push(value.title);
        id2.push(value._id);
    });

    return (
            urlList.length!=0 ? 
            (urlList.map((value, index) => {
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
                            {resume ? items1[index] : items2[index]}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href={value.Url} target="_blank">
                        <Button color="primary" >
                            View
                        </Button>
                        </Link>
                        <Button color="secondary" onClick={async () => {
                            let rid = "";
                            if(resume){
                                rid=id1[index];
                            }
                            else{
                                rid=id2[index];
                            }

                            const res = await fetch('/Delete',{
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                uid: value._id,
                                rcid: rid,
                                rorcv: resume
                            })
                            });
                            const data = await res.json();
                            
                            if(res.status===200){
                                if(resume){
                                    const res1 = await fetch('/GetResume',{
                                        method: "GET"
                                    });
                                    const data1 = await res1.json();
                                    if(res1.status==404){
                                        setUrl([]);
                                        setRList([]);
                                    }
                                    else{
                                        setUrl(data1.urls);
                                        setRList(data1.titles);
                                    }
                                }
                                else{
                                    const res1 = await fetch('/GetCV',{
                                        method: "GET"
                                    });
                                    const data1 = await res1.json();
                                    if(res1.status==404){
                                        setUrl([]);
                                        setCList([]);
                                    }
                                    else{
                                        setUrl(data1.urls);
                                        setCList(data1.titles);
                                    }
                                }
                            }
                        }}>
                            Delete
                        </Button>
                    </CardActions>
                    </Card>
                );
            })
            ) : null
        );
}

export default AccountCard;
