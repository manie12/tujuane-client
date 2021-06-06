import { gql } from '@apollo/client';

export const FETCH_QUERY = gql`
{
    getPosts{
        id username body createdAt
        likes{
            id
            username
            createdAt
        }
    comments{
        id
        username
    
        createdAt
    }
        likeCount
        commentCount
     
    } 
}

`