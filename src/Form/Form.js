import React, { useState, } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';
import { USER_MUTATION } from '../Graphql/userMutation';
import { LOGIN_MUTATION } from '../Graphql/LoginMutation';
import { useDispatch } from 'react-redux';
import { useStyles } from './Styles';
import { setUserAction, setLoginAction } from '../Redux/Action/userAction';

export default function Form() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [Forms, setForm] = useState(true);
    const handleForm = () => {
        setForm(false)
    }

    const handleFormSign = () => {
        setForm(true)
    }
    const [postData, setPostData] = useState({
        username: "", email: "", password: "", confirmPassword: ""
    });

    const [addUser, { loading }] = useMutation(USER_MUTATION, {
        update(proxy, { data: { register: userData } }) {
            console.log(userData)


            dispatch(setUserAction(userData))
            history.push("/")

            //console.log(dispatch(setUserAction(userData)))
        },
        // {
        //   setErrors(err && err.graphQLErrors[0] ? err.graphQLErrors[0].extensions.exception.errors : {})
        //},
        variables: postData

    });
    const [login,] = useMutation(LOGIN_MUTATION, {
        update(proxy, { data: { login: loginUser } }) {
            console.log(loginUser);



            dispatch(setLoginAction(loginUser))


            history.push("/");


        },
        variables: {
            username: postData.username,
            password: postData.password
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        addUser()


    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        login();
    }
    if (loading) {
        return <p>Loading</p>
    }


    return (
        <div>

            {
                Forms ?
                    (
                        <form onSubmit={handleLoginSubmit} style={{ textAlign: "center", marginTop: "13em" }} >
                            <Button variant="contained" color="primary">
                                LinkUp
                            </Button>
                            <TextField
                                //  error={Boolean(errors?.username)}
                                //helperText={errors?.username}
                                id=""
                                label="username"
                                fullWidth
                                value={postData.username}
                                onChange={(e) => setPostData({ ...postData, username: e.target.value })}
                            />
                            <TextField
                                //error={Boolean(errors?.password)}
                                //helperText={Object.keys(errors).length > 1 && Object.values(errors).map(err => err.password)
                                //  }
                                id=""
                                label="password"
                                fullWidth
                                value={postData.password}
                                onChange={(e) => setPostData({ ...postData, password: e.target.value })}
                            />

                            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.buttom}>
                                LOGIN
                            </Button>
                            <Typography className={classes.buttom} onClick={handleForm}>Dont have an account ??</Typography>

                        </form>

                    ) : (
                        <form style={{ textAlign: "center", marginTop: "10em" }} onSubmit={handleSubmit}>
                            <Button variant="contained" color="primary" >
                                LinkUp
                            </Button>

                            <TextField
                                //error={Boolean(errors?.username)}
                                //helperText={(errors?.username)}

                                id=""
                                label="username"
                                fullWidth
                                value={postData.username}
                                onChange={(e) => setPostData({ ...postData, username: e.target.value })}
                            />
                            <TextField
                                //error={Boolean(errors?.email)}
                                // helperText={(errors?.email)}

                                id=""
                                label="email"
                                fullWidth
                                value={postData.email}
                                onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                            />
                            <TextField
                                //error={Boolean(errors?.password)}
                                //helperText={errors?.password}

                                id=""
                                label="password"
                                fullWidth
                                value={postData.password}
                                onChange={(e) => setPostData({ ...postData, password: e.target.value })}

                            />
                            <TextField
                                //error={Boolean(errors?.confirmPassword)}
                                //helperText={errors?.confirmPassword}

                                id=""
                                label="confirmPassword"
                                fullWidth
                                value={postData.confirmPassword}
                                onChange={(e) => setPostData({ ...postData, confirmPassword: e.target.value })}

                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.buttom}>
                                SIGN UP
                            </Button>
                            <Typography className={classes.buttom} onClick={handleFormSign}>already Signed in?</Typography>

                        </form>
                    )




            }
        </div>

    )
}
