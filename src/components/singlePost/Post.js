import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { Avatar, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useStyles } from '../PostContent/Styles';
import { LIKE_MUTATION } from '../../Graphql/LikeMutation';

export default function SinglePost({ post: {
    username, body, likes, likeCount, id
} }) {

    const [like, setlike] = useState(true)
    const history = useHistory()
    const user = useSelector(state => state.users);

    useEffect(() => {
        localStorage.setItem("jwtToken", JSON.stringify(user))
    }, [user])

    const [likePost] = useMutation(LIKE_MUTATION, {
        variables: {
            postId: id
        }
    })

    const classes = useStyles();
    const handleClickBio = () => {
        history.push(`/post/${username}`)
    }


    const likeButton = likes.find(like => like.id === user.id)

    useEffect(() => {

        console.log(user)

        if (likeButton) {
            setlike(true)
        } else {
            setlike(false)
        }


    }, [likeButton, user])



    const likeIcon = like ? (
        <FavoriteIcon fontSize="medium" />
    )
        : (
            <FavoriteBorderOutlinedIcon fontSize="medium" />
        )
    const handleLikeButton = () => {
        likePost()
    }


    const UserSwitch = user ? (
        <>
            <Grid item container alignItems="center" xs={12} >
                <Grid item xs={2} onClick={handleClickBio}>
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
                <Grid container spacing={2} item xs={4} onClick={handleLikeButton}  >
                    <Grid item sm={6} >
                        {likeIcon}

                    </Grid>
                    <Grid item sm={6}>
                        {likeCount}

                    </Grid>
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
