import { gql } from '@apollo/client';

export const CREATE_COMMENTS_MUTATION = gql`

mutation createComment($postId:ID! $body:String!){
    createComment(postID:$postID body:$body){
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