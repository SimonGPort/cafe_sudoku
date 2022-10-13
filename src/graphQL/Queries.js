import {gql} from '@apollo/client';

export const LOGIN=gql`
query login($name:String! $password:String!){
login(
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