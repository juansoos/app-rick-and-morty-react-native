import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './loader.styles';
import {Colors} from '../../common/theme';

export const Loader: FC = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.primary800} />
    </View>
  );
};
