import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Grid, Avatar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from './Styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FETCH_QUERY } from '../../Graphql/FetchPost';
import { CREATE_POST_MUTATION } from '../../Graphql/createPost';

export default function Add() {
    const [body, setBody] = useState("")
    const history = useHistory();
    const classes = useStyles();

    const handleGoBack = () => {
        history.goBack()
    }

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: {
            body: body
        },

        update(proxy, result) {
            console.log(result.data)

            const data = proxy.readQuery({
                query: FETCH_QUERY
            });

            data.getPosts = [result.data.createPost, ...data.getPosts]
            proxy.writeQuery({
                query: FETCH_QUERY, data
            });
            history.push("/")
        },

    })
    console.log(error)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        createPost()
    }
    return (
        <div className={classes.headerTop}>

            <Grid justify="space-between" container item sm={12} className={classes.topBorder}>
                <Grid item sm={6} onClick={handleGoBack}>
                    <ArrowBackIcon />
                </Grid>
                <Grid item sm={6}>
                    <Button variant="contained" color="primary">
                        Post
                    </Button>
                </Grid>
            </Grid>

            <Grid justify="flex-start" alignItems="center" spacing={2} container item sm={12} className={classes.topAvatar}>
                <Grid item sm={2}>
                    <Avatar
                        className={classes.avatar}
                        fontSize="large"
                        src="/avatar.jpg" alt="avatar"

                    />

                </Grid>
                <Grid item sm={10} className={classes.textField}
                >
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            placeholder="whats on your mind"
                            label="whats on your mind"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rowsMax={40}
                            variant="outlined"
                            size="medium"
                            multiline
                            fullWidth
                        />
                        <Button type='submit' variant="contained" color="default">
                            Ppost
</Button>
                    </form>

                </Grid>

            </Grid>
        </div>
    )
}
