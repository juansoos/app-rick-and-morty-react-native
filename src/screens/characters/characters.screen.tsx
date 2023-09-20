import React, {FC, useEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import {FlatList} from 'react-native';
import {GetAllCharacters} from '../../api/repository/characters';
import {CharacterItem} from './components';
import {Footer, Layout, Loader} from '../../components';
import {Character} from '../../api/model/character.model';

export const Characters: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMoreCharacters, setHasMoreCharacters] = useState(true);

  const [characters, setCharacters] = useState<Array<Character>>([]);
  const [page, setPage] = useState(1);

  const getInitialCharacters = async () => {
    const response = await GetAllCharacters();

    setIsLoading(false);
    setCharacters(response.results);
    setHasMoreCharacters(response.info?.next != null);
  };

  const fetchMoreCharacters = async () => {
    if (hasMoreCharacters) {
      const nextPage = page + 1;
      setIsMoreLoading(true);

      const response = await GetAllCharacters(nextPage);

      setIsMoreLoading(false);
      setCharacters(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreCharacters(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialCharacters();
  }, []);

  const renderFooter = () => (
    <Footer
      isMoreLoading={isMoreLoading}
      hasMoreElements={hasMoreCharacters}
      text={' No more characters at the moment'}
    />
  );

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreCharacters}
          ListFooterComponent={renderFooter}
          renderItem={({item}) => {
            return (
              <CharacterItem
                key={uuid.v4().toString()}
                name={item.name}
                image={item.image}
                species={item.species}
                gender={item.gender}
              />
            );
          }}
        />
      )}
    </Layout>
  );
};
