import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Layout} from '../../components/layout/layout.component';
import {Episode} from '../../api/model/episode.model';
import {GetAllEpisodes} from '../../api/repository/episodes';
import {Footer, Loader} from '../../components';
import {EpisodeItem} from './components';

export const Episodes: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMoreEpisodes, setHasMoreEpisodes] = useState(true);

  const [episodes, setEpisodes] = useState<Array<Episode>>([]);
  const [page, setPage] = useState(1);

  const getInitialEpisodes = async () => {
    const response = await GetAllEpisodes();

    setIsLoading(false);
    setEpisodes(response.results);
    setHasMoreEpisodes(response.info?.next != null);
  };

  const fetchMoreEpisodes = async () => {
    if (hasMoreEpisodes) {
      const nextPage = page + 1;
      setIsMoreLoading(true);

      const response = await GetAllEpisodes(nextPage);

      setIsMoreLoading(false);
      setEpisodes(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreEpisodes(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialEpisodes();
  }, []);

  const renderFooter = () => (
    <Footer
      isMoreLoading={isMoreLoading}
      hasMoreElements={hasMoreEpisodes}
      text={' No more episodes at the moment'}
    />
  );

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={episodes}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreEpisodes}
          ListFooterComponent={renderFooter}
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
        />
      )}
    </Layout>
  );
};
