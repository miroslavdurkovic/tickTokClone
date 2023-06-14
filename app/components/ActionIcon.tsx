import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms/Icon';

interface ActionIconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  iconBackgroundColor?: string;
  text?: string;
}

export const ActionIcon = (props: ActionIconProps) => {
  const theme = SelectedTheme();
  const {
    iconName,
    iconSize = Sizes.size.large,
    text,
    iconColor = theme.primaryTextColor,
    iconBackgroundColor,
  } = props;

  const circleStyle = iconBackgroundColor
    ? {
        ...styles.circle,
        backgroundColor: iconBackgroundColor,
      }
    : {};

  return (
    <View style={[styles.container, circleStyle]}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      {text && (
        <Text style={[{color: theme.primaryTextColor}, styles.text]}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Sizes.margin.small,
  },
  circle: {
    width: Sizes.size.extraLarge,
    height: Sizes.size.extraLarge,
    borderRadius: Sizes.size.extraLarge / 2,
  },
  text: {
    marginTop: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
