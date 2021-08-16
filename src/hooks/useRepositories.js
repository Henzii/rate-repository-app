import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (vars = null, searchKeyword = null) => {

  const [repositories, setRepositories] = useState();
  
  const { loading, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { ...vars, ...searchKeyword }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) return;
    
    fetchMore({ variables: {
      after: data.repositories.pageInfo.endCursor,
      ...vars
    }});
  };

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [data, loading]);
  return { repositories, loading, fetchMore: handleFetchMore };
};

export default useRepositories;