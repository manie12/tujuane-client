import { gql } from '@apollo/client';

export const CREATE_POST_MUTATION = gql`

mutation createPost($body:String!){
    createPost(body:$body){
        id username body createdAt
        
        comments{
            id
            username
        
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