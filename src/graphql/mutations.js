import { gql } from '@apollo/client';

export const LOGIN_USER = gql`

mutation authorize($user: String!, $pass: String!) {
    authorize(
      credentials: { username:$user password: $pass}
    ) { accessToken }
  }
`;

export const CREATE_REVIEW = gql`
mutation createReview($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
  createReview(
    review: {
      repositoryName: $repositoryName
      ownerName: $ownerName
      rating: $rating
      text: $text
    }
  ) { repositoryId }
}
`;

export const CREATE_USER = gql`
mutation createUser( $username: String!, $password: String!) {
  createUser(
    user: {
      username: $username
      password: $password
    }
  ) {
    id
  }
}
`;

export const DELETE_REVIEW = gql`
mutation deleteReview($id: ID!) {
  deleteReview(id: $id)
}
`;