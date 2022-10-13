import {gql} from '@apollo/client';

export const CREATEUSER=gql`
mutation createUser($name: String!, $password: String!){
    createUser(
    name:$name
    password:$password
){
    success{
        result,
        status
    },
    user{
        name,
        score,
        id
    }
}
}
`;

export const NEWSCORE=gql`
mutation newScore($id: String!, $date: String!){
    newScore(
    id:$id
    date:$date
){
    success{
        result,
        status
    }
}
}
`;