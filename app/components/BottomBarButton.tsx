/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: BottomBarButton.tsx
 * Description: This file contains the implementation of BottomBarButton.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms';

// <--- Types --->
interface BottomBarProps {
  iconName: string;
  iconSize?: number;
  text: string;
  enabled?: boolean;
}

// <--- Component --->
export const BottomBarButton = (props: BottomBarProps) => {
  const {iconName, iconSize = Sizes.size.medium, text, enabled = false} = props;
  const theme = SelectedTheme();

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={iconSize}
        color={enabled ? theme.primaryTextColor : theme.disabledTextColor}
      />
      <Text
        style={[
          {
            color: enabled ? theme.primaryTextColor : theme.disabledTextColor,
          },
          styles.text,
        ]}>
        {text}
      </Text>
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
