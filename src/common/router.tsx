import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {Characters, Episodes, Locations} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from './theme';

const {Navigator, Screen} = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

function TabBarIconCharacters({color, size}: TabBarIconProps) {
  return <Icon name={'user'} size={size} color={color} />;
}

function TabBarIconLocations({color, size}: TabBarIconProps) {
  return <Icon name={'map'} size={size} color={color} />;
}

function TabBarIconEpisodes({color, size}: TabBarIconProps) {
  return <Icon name={'film'} size={size} color={color} />;
}

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Characters"
        screenOptions={{
          tabBarActiveTintColor: Colors.primary800,
          tabBarInactiveTintColor: Colors.primary300,
        }}>
        <Screen
          name="Characters"
          component={Characters}
          options={{
            tabBarLabel: 'Characters',
            headerShown: false,
            tabBarIcon: TabBarIconCharacters,
          }}
        />
        <Screen
          name="Locations"
          component={Locations}
          options={{
            tabBarLabel: 'Locations',
            headerShown: false,
            tabBarIcon: TabBarIconLocations,
          }}
        />
        <Screen
          name="Episodes"
          component={Episodes}
          options={{
            tabBarLabel: 'Episodes',
            headerShown: false,
            tabBarIcon: TabBarIconEpisodes,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
