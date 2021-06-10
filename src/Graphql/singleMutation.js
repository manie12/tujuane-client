import { gql } from '@apollo/client';

export const SINGLE_MUTATION_POST = gql`

mutation getPost($postId:String!){
    getPost(postId:$postId){
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