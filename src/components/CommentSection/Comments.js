import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Grid, Paper, Typography, TextField, IconButton } from '@material-ui/core';
import { useStyles } from './Styles';
import { useSelector } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Comments() {
    const classes = useStyles();
    const [Comments, setComments] = useState("");

    const { id } = useParams();
    const post = useSelector(state => state.posts);
    const user = useSelector(state => state.users);
    console.log(user);
    console.log(post);
    const { comments } = post.find(post => post.id === id);

    // const [addComment, { loading }] = useMutation(CREATE_COMMENTS_MUTATION, {
    //   update(proxy, { data }) {

    // }
    //})


    return (
        <div style={{ height: "100vh" }} >
            <Grid container style={{ height: '90%' }} >
                <Grid item xs={12} >
                    {

                        comments.map(comm => (
                            <Paper className={classes.themMessage} key={comm.id}>
                                <Grid container >

                                    <Grid item xs={11}>
                                        <Typography style={{ fontWeight: "bold" }}>{comm.username}</Typography>
                                        <Typography>{comm.body}</Typography>
                                        <Typography>{moment(comm.createdAt).fromNow()}</Typography>

                                    </Grid>

                                </Grid>

                            </Paper>

                        ))

                    }

                </Grid>

                <Grid item container alignItems="flex-end" xs={12} >
                    <TextField
                        style={{ width: "80vw", marginRight: '1em' }}
                        id=""
                        label="Comment Here"
                        value={Comments}
                        onChange={e => setComments(e.target.value)}
                        fullWidth
                        fontSize="medium"
                        multiline
                        variant="outlined"
                    />
                    <IconButton>
                        <SendIcon fontSize="large" />

                    </IconButton>
                </Grid>
            </Grid>
        </div >
    )
}
