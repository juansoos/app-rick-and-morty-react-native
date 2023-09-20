import {useEffect, useState} from 'react';
import {GetAllEpisodes} from '../../api/repository/episodes';
import {Episode} from '../../api/model/episode.model';

export const useEpisodes = () => {
  const [isInitialLoadingVisible, setIsInitialLoadingVisible] = useState(true);
  const [isMoreLoadingVisible, setIsMoreLoadingVisible] = useState(false);
  const [hasMoreEpisodes, setHasMoreEpisodes] = useState(true);

  const [episodes, setEpisodes] = useState<Array<Episode>>([]);
  const [page, setPage] = useState(1);

  const getInitialEpisodes = async () => {
    const response = await GetAllEpisodes();

    setIsInitialLoadingVisible(false);
    setEpisodes(response.results);
    setHasMoreEpisodes(response.info?.next != null);
  };

  const fetchMoreEpisodes = async () => {
    if (hasMoreEpisodes) {
      const nextPage = page + 1;
      setIsMoreLoadingVisible(true);

      const response = await GetAllEpisodes(nextPage);

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
