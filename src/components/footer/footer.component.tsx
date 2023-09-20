import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Loader} from '../loader/loader.component';
import {styles} from './footer.styles';

interface FooterProps {
  isMoreLoading: boolean;
  hasMoreElements: boolean;
  text: string;
}

export const Footer: FC<FooterProps> = ({
  isMoreLoading,
  hasMoreElements,
  text,
}) => {
  return (
    <View style={styles.footer}>
      {isMoreLoading && <Loader />}
      {!hasMoreElements && <Text style={styles.footerText}>{text}</Text>}
    </View>
  );
};
