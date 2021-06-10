import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_QUERY } from '../../Graphql/FetchPost';
import { useStyles } from './Styles';
import SinglePost from '../singlePost/Post';
import { getPosts } from '../../Redux/Action/postAction';

const Post = () => {
    const dispatch = useDispatch();
    const [posted, setPosts] = useState([]);

    const posts = useSelector(state => state.posts);

    useEffect(() => {
        console.log(posts)

    }, [posts])
    const classes = useStyles();


    const { loading, data } = useQuery(FETCH_QUERY);

    useEffect(() => {
        if (data) {
            const { getPosts } = data;
            setPosts(getPosts)
            console.log(getPosts)

        }

    }, [data])

    useEffect(() => {
        dispatch(getPosts(posted))

    }, [posted, dispatch])


    if (loading) {
        return <p>loading</p>
    }
    return (
        <div className={classes.container}>
            {

                posts && posts.map((post) => (
                    <Grid container spacing={2} key={post.id}>
                        <SinglePost post={post} />
                    </Grid>


                ))


            }


        </div>
    )
}
export default Post;