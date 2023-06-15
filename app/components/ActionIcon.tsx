/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: ActionIcon.tsx
 * Description: This file contains the implementation of ActionIcon.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms';

// <--- Types --->
interface ActionIconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  iconBackgroundColor?: string;
  text?: string;
}

// <--- Component --->
export const ActionIcon = (props: ActionIconProps) => {
  const theme = SelectedTheme();
  const {
    iconName,
    iconSize = Sizes.size.medium,
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
    <View style={[styles.container]}>
      <View style={circleStyle}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
      {text && (
        <Text style={[{color: theme.primaryTextColor}, styles.text]}>
          {text}
        </Text>
      )}
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Sizes.margin.small,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Sizes.size.mediumLarge,
    height: Sizes.size.mediumLarge,
    borderRadius: Sizes.size.mediumLarge / 2,
  },
  text: {
    marginTop: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
