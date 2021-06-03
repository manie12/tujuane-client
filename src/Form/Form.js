import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';
import { USER_MUTATION } from '../Graphql/userMutation';
import { useStyles } from './Styles';

export default function Form() {
    const classes = useStyles();
    const [errors, setErrors] = useState({})

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
        update(proxy, result) {
            console.log(result)

        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: postData

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addUser()
    }
    return (
        <div>

            {
                Forms ?
                    (
                        <form style={{ textAlign: "center", marginTop: "13em" }} onSubmit={handleSubmit}>
                            <Button variant="contained" color="primary">
                                LinkUp
                            </Button>
                            <TextField
                                error={errors?.username}
                                helperText={errors?.username}
                                id=""
                                label="username"
                                fullWidth
                                value={postData.username}
                            />
                            <TextField
                                error={errors?.password}
                                helperText={errors?.password}
                                id=""
                                label="password"
                                fullWidth
                                value={postData.password}

                            />

                            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.buttom}>
                                LOGIN
                            </Button>
                            <Typography className={classes.buttom} onClick={handleForm}>Dont have an account ??</Typography>

                        </form>

                    ) : (
                        <form style={{ textAlign: "center", marginTop: "10em" }}>
                            <Button variant="contained" color="primary" >
                                LinkUp
                            </Button>

                            <TextField
                                error={errors?.username}
                                helperText={errors?.username}

                                id=""
                                label="username"
                                fullWidth
                                value={postData.username}
                            />
                            <TextField
                                error={errors?.email}
                                helperText={errors?.email}

                                id=""
                                label="email"
                                fullWidth
                                value={postData.email}
                            />
                            <TextField
                                error={errors?.password}
                                helperText={errors?.password}

                                id=""
                                label="password"
                                fullWidth
                                value={postData.password}
                            />
                            <TextField
                                error={errors?.confirmPassword}
                                helperText={errors?.confirmPassword}

                                id=""
                                label="confirmPassword"
                                fullWidth
                                value={postData.confirmPassword}
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
