import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FETCH_QUERY } from '../../Graphql/FetchPost';
import { useStyles } from './Styles';
import SinglePost from '../singlePost/Post';
export default function Post() {
    const [posted, setPosts] = useState([])
    const user = useSelector(state => state.users);

    console.log(user)
    const classes = useStyles();

    const { loading, data } = useQuery(FETCH_QUERY);
    useEffect(() => {

        setPosts(data)

    }, [data])

    if (loading) {
        return <p>loading</p>
    }
    return (
        <div className={classes.container}>
            {

                posted && posted.map((post) => (
                    <Grid container spacing={2} key={post.id}>
                        <SinglePost post={post.data.getPosts} />
                    </Grid>


                ))


            }


        </div>
    )
}
