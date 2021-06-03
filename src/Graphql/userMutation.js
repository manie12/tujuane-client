import gql from 'graphql-tag';

export const USER_MUTATION = gql`
mutation register(
    $username:String!
    $email:String!
    $password:String!
    $confirmPassword:String!
){
    register(RegisterInput:{
        username:$username
        email:$email
        password:$password
        confirmPassword:$confirmPassword
    }){
        
        id
    email
    username
    createdAt
    token
    }
}
`