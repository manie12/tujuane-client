import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Avatar, Button } from '@material-ui/core';
import { useStyles } from './Styles';

export default function Bio() {
    const { username } = useParams();
    const classes = useStyles();

    const posts = useSelector(state => state.posts)
    //let userBio;
    //useEffect(() => {
    console.log(posts)

    //   }, [posts])

    const userBio = posts.find(pos => pos.username === username)

    const BioComponent = userBio && (
        <div className={classes.topHeader}>
            <Grid container justify="space-around" alignItems="center" item sm={12}>
                <Grid item sm={3}>
                    <Avatar
                        className={classes.avatar}
                        fontSize="large"
                        src="/avatar.jpg" alt="avatar"

                    />

                </Grid>

                <Grid item sm={3}>
                    <Grid item sm={12}>
                        {userBio.username}
                    </Grid>
                    <Grid item sm={12}>
                        Posts
                </Grid>
                </Grid>

                <Grid item sm={3}>
                    <Grid item sm={12}>
                        3,456
                </Grid>
                    <Grid item sm={12}>
                        Following
                </Grid>
                </Grid>
                <Grid item sm={3}>
                    <Grid item sm={12}>
                        25,678
                </Grid>
                    <Grid item sm={12}>
                        Followers
                </Grid>
                </Grid>

            </Grid>

            <Grid className={classes.editButton} container item sm={12}>
                <Button fullWidth variant="outlined" color="default">
                    EDIT PROFILE
</Button>
            </Grid>

            <Grid container spacing={1} item justify="space-between" sm={12}>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>
                <Grid item sm={4}>
                    <img className={classes.postImage} src='/avatar.jpg' alt='posts' />
                </Grid>

            </Grid>


        </div>
    )


    return BioComponent;


}
