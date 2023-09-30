import React, {FC} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Layout} from '../../components/layout/layout.component';
import {Empty, Footer, Loader, SearchBar} from '../../components';
import {EpisodeItem} from './components';
import {useEpisodes} from './use_episodes';

export const Episodes: FC = () => {
  const {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreEpisodes,
    episodes,
    isSearchActive,
    searchPhrase,
    fetchMoreEpisodes,
    onSearch,
    setIsSearchActive,
    onReset,
  } = useEpisodes();

  return (
    <Layout>
      {isInitialLoadingVisible && <Loader />}
      {!isInitialLoadingVisible && (
        <FlatList
          data={episodes}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreEpisodes}
          renderItem={({item}) => {
            return (
              <EpisodeItem
                key={uuid.v4().toString()}
                name={item.name}
                episode={item.episode}
                air_date={item.air_date}
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
              hasMoreElements={hasMoreEpisodes}
              text={' No more episodes at the moment'}
            />
          }
        />
      )}
    </Layout>
  );
};
