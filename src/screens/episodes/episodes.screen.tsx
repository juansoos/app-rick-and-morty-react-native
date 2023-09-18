import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Layout} from '../../components/layout/layout.component';
import {Episode} from '../../api/model/episode.model';
import {GetAllEpisodes} from '../../api/repository/episodes';
import {Loader} from '../../components';
import {EpisodeItem} from './components';

export const Episodes: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  const getAllEpisodes = async () => {
    const response = await GetAllEpisodes();

    setIsLoading(false);
    setEpisodes(response.results);
  };

  useEffect(() => {
    getAllEpisodes();
  }, []);

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={episodes}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <EpisodeItem
                key={item.id}
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
