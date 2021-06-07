import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import { useStyles } from '../PostContent/Styles';

export default function SinglePost({ post: {
    username, body
} }) {


    const history = useHistory()
    const user = useSelector(state => state.users)

    const classes = useStyles();


    const UserSwitch = user ? (
        <>
            <Grid item container alignItems="center" xs={12}>
                <Grid item xs={2}>
                    <Avatar
                        className={classes.avatar}
                        src="/avatar.jpg" alt="avatar"

                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography className={classes.typography}>{username}</Typography>
                </Grid>
            </Grid>

            <Grid className={classes.postGrid} item xs={12}>
                <img className={classes.postImage} src="/avatar.jpg" alt="post" />
            </Grid>
            <Grid container item sm={12}>
                {body}
            </Grid>
            <Grid item container justify="space-evenly" alignItems="center" xs={12} className={classes.iconGrid}>
                <Grid item xs={4} >
                    <FavoriteIcon fontSize="medium" />
                </Grid>
                <Grid item xs={4}>
                    <CommentIcon fontSize="medium" />
                </Grid>
                <Grid item xs={4}>
                    <SendTwoToneIcon fontSize="medium" />
                </Grid>
            </Grid>

        </>
    ) : (
        history.push("/")
    )
    return UserSwitch;
}
