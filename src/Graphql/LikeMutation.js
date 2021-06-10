import { gql } from '@apollo/client';

export const LIKE_MUTATION = gql`
mutation($postId:ID!){
    likePost(postId:$postId){
        id username 
        
            
         likes{
             id 
             createdAt
             username
         }
         likeCount

    }
}




`