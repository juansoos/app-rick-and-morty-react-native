import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Loader} from '../loader/loader.component';
import {styles} from './footer.styles';

interface FooterProps {
  isLoadingVisible: boolean;
  hasMoreElements: boolean;
  text: string;
}

export const Footer: FC<FooterProps> = ({
  isLoadingVisible,
  hasMoreElements,
  text,
}) => {
  return (
    <View style={styles.footer}>
      {isLoadingVisible && <Loader />}
      {!hasMoreElements && <Text style={styles.footerText}>{text}</Text>}
    </View>
  );
};
