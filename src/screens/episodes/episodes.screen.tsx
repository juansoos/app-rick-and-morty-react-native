import React, {FC} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Layout} from '../../components/layout/layout.component';
import {Footer, Loader} from '../../components';
import {EpisodeItem} from './components';
import {useEpisodes} from './use_episodes';

export const Episodes: FC = () => {
  const {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreEpisodes,
    episodes,
    fetchMoreEpisodes,
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
