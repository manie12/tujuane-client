import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core'
import { FETCH_QUERY } from '../../Graphql/FetchPost';
import { useStyles } from './Styles';
import SinglePost from '../singlePost/Post';
export default function Post() {
    const classes = useStyles();
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_QUERY);
    return (
        <div className={classes.container}>
            {

                posts && posts.map((post) => (
                    <Grid container spacing={2} key={post.id}>
                        <SinglePost posts={post} />
                    </Grid>


                ))


            }


        </div>
    )
}
