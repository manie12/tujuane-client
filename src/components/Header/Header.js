import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './Styles';

export default function Header() {
    const history = useHistory();
    const classes = useStyles();
    const handleAvatar = () => {
        history.push("/bio")
    }
    const handleHome = () => {
        history.push("/")
    }
    const handleAddIcon = () => {
        history.push("/add")
    }
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
                        <Grid container item xs={2} onClick={handleAvatar}>
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
                        <Grid item xs={3} onClick={handleHome}>
                            <HomeIcon fontSize="large" />

                        </Grid>
                        <Grid item xs={3}>
                            <SearchIcon fontSize="large" />

                        </Grid>
                        <Grid item xs={3} onClick={handleAddIcon}>
                            <AddIcon fontSize="large" />
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
