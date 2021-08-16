import { gql } from '@apollo/client';

import { REPOSITORY_ITEM, REPOSITORY_ITEM_REVIEWS } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories(
          $orderBy: AllRepositoriesOrderBy,
          $orderDirection: OrderDirection,
          $search: String,
          $after: String,
        ) {
        repositories(
          orderBy: $orderBy, 
          orderDirection: $orderDirection, 
          searchKeyword: $search,
          first: 2,
          after: $after
        ) {
            edges{
              node {
                ...RepositoryDetail
              }
              cursor
            }
            pageInfo {
              endCursor
              startCursor
              hasNextPage
            }
          }
    }
    ${REPOSITORY_ITEM}
`;
export const GET_SINGLE_REPOSITORY = gql`
    query repository($id: ID!) {
      repository(id: $id) {
        ...RepositoryDetail
        ...RepositoryReviews
      }
    }
    ${REPOSITORY_ITEM}
    ${REPOSITORY_ITEM_REVIEWS}
`;
export const AUTHORIZED_USER = gql`
query authorizedUser($includeReviews: Boolean = false) {
  authorizedUser {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repository { 
            fullName
            id
          }
          user {
            username
            id
          }
        }
      }
    }
  }
}
`;

