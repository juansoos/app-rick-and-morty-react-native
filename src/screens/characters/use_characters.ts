import {useEffect, useState} from 'react';
import {Character} from '../../api/model/character.model';
import {GetAllCharacters} from '../../api/repository/characters';

export const useCharacters = () => {
  const [isInitialLoadingVisible, setIsInitialLoadingVisible] = useState(true);
  const [isMoreLoadingVisible, setIsMoreLoadingVisible] = useState(false);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [page, setPage] = useState(1);

  const getInitialCharacters = async () => {
    const response = await GetAllCharacters();

    setIsInitialLoadingVisible(false);
    setCharacters(response.results);
    setHasMoreCharacters(response.info?.next != null);
  };

  const fetchMoreCharacters = async () => {
    if (hasMoreCharacters) {
      const nextPage = page + 1;
      setIsMoreLoadingVisible(true);

      const response = await GetAllCharacters(nextPage);

      setIsMoreLoadingVisible(false);
      setCharacters(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreCharacters(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialCharacters();
  }, []);

  return {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreCharacters,
    characters,
    fetchMoreCharacters,
  };
};