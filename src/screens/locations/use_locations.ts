import {useEffect, useState} from 'react';
import {Location} from '../../api/model/location.model';
import {locationRepository} from '../../common/di/repository_module';

export const useLocations = () => {
  const [isInitialLoadingVisible, setIsInitialLoadingVisible] = useState(true);
  const [isMoreLoadingVisible, setIsMoreLoadingVisible] = useState(false);
  const [hasMoreLocations, setHasMoreLocations] = useState(true);

  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState(1);

  const getInitialLocations = async () => {
    const response = await locationRepository.getLocations();

    setIsInitialLoadingVisible(false);
    setLocations(response.results);
    setHasMoreLocations(response.info?.next != null);
  };

  const fetchMoreLocations = async () => {
    if (hasMoreLocations) {
      const nextPage = page + 1;
      setIsMoreLoadingVisible(true);

      const response = await locationRepository.getLocations(nextPage);

      setIsMoreLoadingVisible(false);
      setLocations(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreLocations(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialLocations();
  }, []);

  return {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreLocations,
    locations,
    fetchMoreLocations,
  };
};
