import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Loader} from '../loader/loader.component';
import {styles} from './footer.styles';

interface FooterProps {
  isMoreLoading: boolean;
  hasMoreCharacters: boolean;
  text: string;
}

export const Footer: FC<FooterProps> = ({
  isMoreLoading,
  hasMoreCharacters,
  text,
}) => {
  return (
    <View style={styles.footer}>
      {isMoreLoading && <Loader />}
      {!hasMoreCharacters && <Text style={styles.footerText}>{text}</Text>}
    </View>
  );
};
