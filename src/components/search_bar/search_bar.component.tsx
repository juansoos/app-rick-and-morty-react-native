import React, {FC} from 'react';
import {
  Button,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './search_bar.styles';
import Feather from 'react-native-vector-icons/Feather';

interface SearchBarProps {
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  focus: boolean;
  onFocus: (value: boolean) => void;
  value: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  onChangeText,
  onFocus,
  focus,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather style={styles.iconSearch} name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => {
            onFocus(true);
          }}
        />
        {focus && (
          <TouchableOpacity
            onPress={() => {
              onFocus(false);
              Keyboard.dismiss();
            }}>
            <Feather style={styles.iconClose} name="x-circle" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
