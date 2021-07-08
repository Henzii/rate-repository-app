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
        id
    }
`;