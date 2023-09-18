import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './episode_item.styles';

interface EpisodeItemProps {
  name: string;
  episode: string;
  air_date: string;
}

export const EpisodeItem: FC<EpisodeItemProps> = props => {
  const {name, episode, air_date} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.episode}>{`Episode: ${episode}`}</Text>
        <Text style={styles.air_date}>{`Air date: ${air_date}`}</Text>
      </View>
    </View>
  );
};
