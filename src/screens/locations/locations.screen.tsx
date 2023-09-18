import React, {FC, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Layout} from '../../components/layout/layout.component';
import {Location} from '../../api/model/location.model';
import {GetAllLocations} from '../../api/repository/locations';
import {Loader} from '../../components';
import {LocationItem} from './components';

export const Locations: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState<Array<Location>>([]);

  const getAllLocations = async () => {
    const response = await GetAllLocations();

    setIsLoading(false);
    setLocations(response.results);
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <Layout>
      {isLoading && <Loader />}
      {!isLoading && (
        <FlatList
          data={locations}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <LocationItem
                key={item.id}
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
