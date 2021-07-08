import { gql } from '@apollo/client';

export const LOGIN_USER = gql`

mutation authorize($user: String!, $pass: String!) {
    authorize(
      credentials: { username:$user password: $pass}
    ) { accessToken }
  }
`;