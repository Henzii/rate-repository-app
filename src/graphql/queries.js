import { gql } from '@apollo/client';

import { REPOSITORY_ITEM } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories {
        repositories {
            edges{
              node {
                ...RepositoryDetail
              }
            }
          }
    }
    ${REPOSITORY_ITEM}
`;

export const AUTHORIZED_USER = gql`
query authorizedUser {
  authorizedUser {
    id
    username
  }
}
`;

