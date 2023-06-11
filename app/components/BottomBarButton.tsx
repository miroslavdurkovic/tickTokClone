import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore  //3rd party - for assessment purpose ignore it
import Icon from 'react-native-vector-icons/FontAwesome';
import {SelectedTheme} from '../helpers';

interface BottomBarProps {
  iconName: string;
  iconSize: number;
  text: string;
  enabled: boolean;
}

export const BottomBarButton = (props: BottomBarProps) => {
  const theme = SelectedTheme();

  return (
    <View style={styles.container}>
      <Icon
        name={props.iconName}
        size={props.iconSize}
        color={props.enabled ? theme.primaryTextColor : theme.disabledTextColor}
      />
      <Text
        style={[
          {
            color: props.enabled
              ? theme.primaryTextColor
              : theme.disabledTextColor,
          },
          styles.text,
        ]}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 12,
  },
});
