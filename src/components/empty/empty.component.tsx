import {FC} from 'react';
import React, {Text, View, Button, GestureResponderEvent} from 'react-native';
import {styles} from './empty.styles';

interface EmptyProps {
  onReset?: ((event: GestureResponderEvent) => void) | undefined;
}
export const Empty: FC<EmptyProps> = ({onReset}) => {
  return (
    <View style={styles.container}>
      <Text>No hay elementos</Text>
      <Button title="Reset Filter" onPress={onReset} />
    </View>
  );
};
