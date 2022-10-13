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