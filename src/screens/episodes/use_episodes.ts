import {useEffect, useState} from 'react';

import {Episode} from '../../api/model/episode.model';
import {episodeRepository} from '../../common/di/repository_module';

export const useEpisodes = () => {
  const [isInitialLoadingVisible, setIsInitialLoadingVisible] = useState(true);
  const [isMoreLoadingVisible, setIsMoreLoadingVisible] = useState(false);
  const [hasMoreEpisodes, setHasMoreEpisodes] = useState(true);

  const [episodes, setEpisodes] = useState<Array<Episode>>([]);
  const [page, setPage] = useState(1);

  const getInitialEpisodes = async () => {
    const response = await episodeRepository.getEpisodes();

    setIsInitialLoadingVisible(false);
    setEpisodes(response.results);
    setHasMoreEpisodes(response.info?.next != null);
  };

  const fetchMoreEpisodes = async () => {
    if (hasMoreEpisodes) {
      const nextPage = page + 1;
      setIsMoreLoadingVisible(true);

      const response = await episodeRepository.getEpisodes(nextPage);

      setIsMoreLoadingVisible(false);
      setEpisodes(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreEpisodes(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialEpisodes();
  }, []);

  return {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreEpisodes,
    episodes,
    fetchMoreEpisodes,
  };
};
