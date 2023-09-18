import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {GetAllCharacters} from '../../api/repository/characters';
import {CharacterItem} from './components/character_item/character_item.component';
import {Layout, Loader} from '../../components';
import {Character} from '../../api/model/character.model';

export const Characters: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Array<Character>>([]);

  const getAllCharacters = async () => {
    const response = await GetAllCharacters();

    setIsLoading(false);
    setCharacters(response.results);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <Layout title="Characters">
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <CharacterItem
                key={item.id}
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
