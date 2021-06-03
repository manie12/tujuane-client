import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useStyles } from './Styles';

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Grid container  >
                        <Grid item xs={10}>
                            <Typography className={classes.linkUp} variant="h6">
                                Link Up
                            </Typography>

                        </Grid>
                        <Grid container item xs={2}>
                            <Avatar
                                className={classes.avatar}
                                fontSize="large"
                                src="/avatar.jpg" alt="avatar"

                            />

                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>

            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Grid container spacing={3} justify="space-evenly">
                        <Grid item xs={3}>
                            <HomeIcon fontSize="large" />

                        </Grid>
                        <Grid item xs={3}>
                            <SearchIcon fontSize="large" />

                        </Grid>
                        <Grid item xs={3}>
                            <NotificationsIcon fontSize="large" />

                        </Grid>
                        <Grid item xs={3}>
                            <MailOutlineIcon fontSize="large" />

                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>


        </div>
    )
}
