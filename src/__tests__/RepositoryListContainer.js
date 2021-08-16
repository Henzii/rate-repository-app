import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../components/RepositoryListContainer';
import React from 'react';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            // Add your test code here
            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
            const nimet = getAllByTestId('itemName');
            const descs = getAllByTestId('itemDescription');
            const langs = getAllByTestId('itemLanguage');
            const numbers = getAllByTestId('itemNumbers');
            for (let i = 0; i<nimet.length; i++) {
                expect(nimet[i]).toHaveTextContent( repositories.edges[i].node.fullName);
                expect(descs[i]).toHaveTextContent( repositories.edges[i].node.description);
                expect(langs[i]).toHaveTextContent( repositories.edges[i].node.language);
                // vmp... 
                expect(numbers[0+i*4]).toHaveTextContent( n2k(repositories.edges[i].node.forksCount ));
                expect(numbers[1+i*4]).toHaveTextContent( n2k(repositories.edges[i].node.stargazersCount ));
                expect(numbers[2+i*4]).toHaveTextContent( n2k(repositories.edges[i].node.reviewCount ));
                expect(numbers[3+i*4]).toHaveTextContent( n2k(repositories.edges[i].node.ratingAverage ));
            }
        }
        );
    });
});

const n2k = (n) => {
    return (n > 1000) ? (n/1000)+'k' : n;
};