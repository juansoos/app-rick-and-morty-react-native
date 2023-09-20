import React, {FC, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Layout} from '../../components/layout/layout.component';
import {Location} from '../../api/model/location.model';
import {GetAllLocations} from '../../api/repository/locations';
import {Footer, Loader} from '../../components';
import {LocationItem} from './components';

export const Locations: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [hasMoreLocations, setHasMoreLocations] = useState(true);

  const [locations, setLocations] = useState<Array<Location>>([]);
  const [page, setPage] = useState(1);

  const getInitialLocations = async () => {
    const response = await GetAllLocations();

    setIsLoading(false);
    setLocations(response.results);
    setHasMoreLocations(response.info?.next != null);
  };

  const fetchMoreLocations = async () => {
    if (hasMoreLocations) {
      const nextPage = page + 1;
      setIsMoreLoading(true);

      const response = await GetAllLocations(nextPage);

      setIsMoreLoading(false);
      setLocations(prev => [...prev, ...response.results]);
      setPage(nextPage);
      setHasMoreLocations(response.info?.next != null);
    }
  };

  useEffect(() => {
    getInitialLocations();
  }, []);

  const renderFooter = () => (
    <Footer
      isMoreLoading={isMoreLoading}
      hasMoreElements={hasMoreLocations}
      text={' No more locations at the moment'}
    />
  );

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={locations}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreLocations}
          ListFooterComponent={renderFooter}
          renderItem={({item}) => {
            return (
              <LocationItem
                key={uuid.v4().toString()}
                name={item.name}
                type={item.type}
                dimension={item.dimension}
              />
            );
          }}
        />
      )}
    </Layout>
  );
};
