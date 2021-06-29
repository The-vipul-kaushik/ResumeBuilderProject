import React, { useContext, useState } from 'react';
import {Link as Linked} from 'react-router-dom';
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));
  

    const SignUp = () => {

        const [emailError,setEmailError]=useState()
        const {setAuth} = useContext(AuthContext);
        const [user,setUser] = useState({
            firstName:"", lastName:"", email:"", password:"" 
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
                    Sign up
                    </Typography>
                    <form method="POST" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={user.firstName}
                            onChange={handleChage}
                            autoFocus
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={user.lastName}
                            onChange={handleChage}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={handleChage}
                        />
                        <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                        }}>{emailError}</span>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={user.password}
                            onChange={handleChage}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                        </Grid>
                    </Grid>
                    <Linked to="/UserForm">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={ async() => {
                            const {firstName, lastName, email, password} = user;

                            const res = await fetch("/SignUp",{
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    firstName,
                                    lastName,
                                    email,
                                    password
                                })
                            });
                            setUser({
                                firstName:"",
                                lastName:"",
                                email:"",
                                password:""
                            });
                            const data = await res.json();
                            if(res.status==422){
                                window.alert('All fields are required');
                            }
                            else if(res.status==409){
                                window.alert('User already exist');
                            }
                            else{
                                setAuth(true);
                                cookies.set('jwttoken',data.message,{
                                    // expires: new Date(Date.now() + 60*60*24),
                                    // secure: false,
                                    // httpOnly: true
                                });
                            }
                        }}
                    >
                        Sign Up
                    </Button>
                    </Linked>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="/SignIn" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
            </Container>
        );
    }
export default SignUp;