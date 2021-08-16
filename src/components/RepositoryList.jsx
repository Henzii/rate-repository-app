import React, { useState } from 'react';
import { Provider } from 'react-native-paper';
import { useHistory } from 'react-router-native';

import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
import RepositorySortMenu from './RepositorySortMenu';


const RepositoryList = () => {

  const [repositoriesSortVars, setRepositoriesSortVars] = useState(null);
  const [repositoriesSearchKeyword, setRepositoriesSearchKeyword] = useState(null);

  const { repositories, fetchMore } = useRepositories({ first: 8, ...repositoriesSortVars}, repositoriesSearchKeyword);

  const history = useHistory();

  const handleSort = (sortVars) => {
    setRepositoriesSortVars(sortVars);
  };
  const handleSearch = (keyword) => {
    setRepositoriesSearchKeyword((keyword !== '') ? { search: keyword } : null);

  };
  const handleItemPress = (id) => {
    history.push(`/repository/${id}`);
  };
  const onEndReached = () => {
    fetchMore();
    console.log('Welcome to the end');
  };
  return (
    <Provider>
      <RepositorySortMenu handleSort={handleSort} />
      <RepositoryListContainer
        repositories={repositories}
        handleSearch={handleSearch}
        handleItemPress={handleItemPress}
        onEndReached={onEndReached}
      />
    </Provider>);

};
export default RepositoryList;