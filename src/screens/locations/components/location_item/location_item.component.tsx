import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './location_item.styles';

interface LocationItemProps {
  name: string;
  type: string;
  dimension: string;
}

export const LocationItem: FC<LocationItemProps> = props => {
  const {name, type, dimension} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.species}>{`Type: ${type}`}</Text>
        <Text style={styles.gender}>{`Dimension: ${dimension}`}</Text>
      </View>
    </View>
  );
};
