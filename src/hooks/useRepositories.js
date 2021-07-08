import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

    const { loading, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

  const fetchRepositories = async () => {
  };

  useEffect(() => {
    if (!loading) {
        setRepositories(data.repositories);
    }
  }, [data]);
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;