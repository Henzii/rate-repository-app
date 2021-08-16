import { gql } from '@apollo/client';

export const REPOSITORY_ITEM = gql`
    fragment RepositoryDetail on Repository {
        fullName
        description
        language
        forksCount
        stargazersCount
        reviewCount
        ratingAverage
        url
        id
    }
`;
export const REPOSITORY_ITEM_REVIEWS = gql`
    fragment RepositoryReviews on Repository {
        reviews {
            edges {
                node {
                    id
                    text
                    rating
                    createdAt
                    user {
                      id
                      username
                    }
                }
            }
        }
    }
`;