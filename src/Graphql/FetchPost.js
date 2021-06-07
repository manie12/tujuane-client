import { gql } from '@apollo/client';

export const FETCH_QUERY = gql`
{
    getPosts{
        id username body createdAt
        comments{
            id
            username
            body   
            createdAt
        }
            
            commentCount
         likes{
             id 
             createdAt
             username
         }
         likeCount

    
     
    } 
}

`