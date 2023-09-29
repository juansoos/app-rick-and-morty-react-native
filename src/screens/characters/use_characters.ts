import {useEffect, useState} from 'react';
import {Character} from '../../api/model/character.model';
import {characterRepository} from '../../common/di/repository_module';

export const useCharacters = () => {
  const [isInitialLoadingVisible, setIsInitialLoadingVisible] = useState(true);
  const [isMoreLoadingVisible, setIsMoreLoadingVisible] = useState(false);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [page, setPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState('');

  const getInitialCharacters = async () => {
    const response = await characterRepository.getCharacters();

    setIsInitialLoadingVisible(false);
    setCharacters(response.results);
    setHasMoreCharacters(response.info?.next != null);
  };

  const fetchMoreCharacters = async () => {
    if (hasMoreCharacters && !isSearchActive) {
      const nextPage = page + 1;
      setIsMoreLoadingVisible(true);

      const response = await characterRepository.getCharacters(nextPage);

      setIsMoreLoadingVisible(false);
      setCharacters(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreCharacters(response.info?.next != null);
    }
  };

  const onSearch = (query: string) => {
    const initialCharacters = characters;
    setSearchPhrase(query);

    if (query !== '') {
      const charecterListFiltered = initialCharacters.filter(character =>
        character.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );

      setCharacters(charecterListFiltered);
    } else {
      setCharacters(initialCharacters);
    }
  };

  const onReset = async () => {
    setIsInitialLoadingVisible(true);
    setSearchPhrase('');
    setIsSearchActive(false);

    const response = await characterRepository.getCharacters();

    setIsInitialLoadingVisible(false);
    setCharacters(response.results);
    setHasMoreCharacters(response.info?.next != null);
  };

  useEffect(() => {
    getInitialCharacters();
  }, []);

  return {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreCharacters,
    characters,
    searchPhrase,
    isSearchActive,
    onSearch,
    fetchMoreCharacters,
    setIsSearchActive,
    onReset,
  };
};
