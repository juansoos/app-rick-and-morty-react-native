import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './layout.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <View style={styles.base}>
      <SafeAreaView>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
      {children}
    </View>
  );
};
