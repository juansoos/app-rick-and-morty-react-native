import React, {FC} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {CharacterItem} from './components';
import {Empty, Footer, Layout, Loader, SearchBar} from '../../components';
import {useCharacters} from './use_characters';

export const Characters: FC = () => {
  const {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreCharacters,
    characters,
    isSearchActive,
    searchPhrase,
    fetchMoreCharacters,
    onSearch,
    setIsSearchActive,
    onReset,
  } = useCharacters();

  return (
    <Layout>
      {isInitialLoadingVisible && <Loader />}
      {!isInitialLoadingVisible && (
        <FlatList
          data={characters}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreCharacters}
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
          ListEmptyComponent={<Empty onReset={onReset} />}
          ListHeaderComponent={
            <SearchBar
              placeholder={'Buscar'}
              value={searchPhrase}
              onChangeText={onSearch}
              onFocus={setIsSearchActive}
              focus={isSearchActive}
            />
          }
          ListFooterComponent={
            <Footer
              isLoadingVisible={isMoreLoadingVisible}
              hasMoreElements={hasMoreCharacters}
              text={' No more characters at the moment'}
            />
          }
        />
      )}
    </Layout>
  );
};
