import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './character_item.styles';

interface CharacterItemProps {
  image: string;
  name: string;
  species: string;
  gender: string;
}

export const CharacterItem: FC<CharacterItemProps> = props => {
  const {name, species, gender, image} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.species}>{`Specie: ${species}`}</Text>
        <Text style={styles.gender}>{`Gender: ${gender}`}</Text>
      </View>
    </View>
  );
};
