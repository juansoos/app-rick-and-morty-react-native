import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './layout.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <View style={styles.base}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
