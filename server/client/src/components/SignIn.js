import React, {useContext, useState} from 'react';
import {Link as Linked} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {AuthContext} from '../AuthContext';
import Cookies from 'universal-cookie';
import validator from 'validator';
const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

    const SignIn = () => {
        const [emailError, setEmailError] = useState('')
        const {setAuth} = useContext(AuthContext);
        const [user,setUser] = useState({
            email:"", password:"" 
        });

        let name, value;
        const handleChage = (e) => {
            name = e.target.name;
            value = e.target.value;

            setUser({...user, [name] : value});
            if(name==="email")
            {
                if(value==='') {
                setEmailError('')
              }
              else if(validator.isEmail(value))
              {
                setEmailError('Valid Email :)')  
              }
              else {
                setEmailError('Enter Valid Email!')
              }
            }
        }

        const classes = useStyles();
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form method="POST" className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={user.email}
                        onChange={handleChage}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={handleChage}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Linked to="/">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={async () => {
                            const {email, password} = user;
                            const res = await fetch("/SignIn",{
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    email,
                                    password
                                })
                            });
                            setUser({
                                email:"",
                                password:""
                            });
                            const data = await res.json();
                            if(res.status==200){
                                setAuth(true);
                                cookies.set('jwttoken',data.message,{
                                    // expires: new Date(Date.now() + 60*60*24),
                                    // secure: false,
                                    // httpOnly: true
                                });
                            }
                            else if(res.status==422){
                                window.alert('All fields are required');
                            }
                            else if(res.status==403){
                                window.alert('Incorrect Password');
                            }
                            else{
                                window.alert('Invalid Credentials');
                            }
                        }}
                    >
                        Sign In
                    </Button>
                    </Linked>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="/SignUp" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
        );
    }
export default SignIn;