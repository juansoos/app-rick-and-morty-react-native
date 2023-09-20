import React, {FC} from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {Layout} from '../../components/layout/layout.component';
import {Footer, Loader} from '../../components';
import {LocationItem} from './components';
import {useLocations} from './use_locations';

export const Locations: FC = () => {
  const {
    isInitialLoadingVisible,
    isMoreLoadingVisible,
    hasMoreLocations,
    locations,
    fetchMoreLocations,
  } = useLocations();

  return (
    <Layout>
      {isInitialLoadingVisible && <Loader />}
      {!isInitialLoadingVisible && (
        <FlatList
          data={locations}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreLocations}
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
          ListFooterComponent={
            <Footer
              isLoadingVisible={isMoreLoadingVisible}
              hasMoreElements={hasMoreLocations}
              text={' No more locations at the moment'}
            />
          }
        />
      )}
    </Layout>
  );
};
