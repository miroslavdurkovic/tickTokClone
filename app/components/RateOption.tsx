/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: RateOption.tsx
 * Description: This file contains the implementation of RateOption.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';

// <--- Types --->
interface RateOptionProps {
  text: number;
  color: string;
  onPress: (id: number) => void;
}

// <--- Component --->
export const RateOption = (props: RateOptionProps) => {
  const {text, color, onPress} = props;
  const theme = SelectedTheme();

  const handleOnPress = () => {
    onPress && onPress(text);
  };

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}]}
      onPress={handleOnPress}>
      <Text style={[{color: theme.primaryTextColor}, styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.size.extraLarge,
    marginVertical: Sizes.margin.small,
    marginRight: Sizes.margin.small,
    borderRadius: Sizes.size.extraSmall,
  },
  text: {
    fontSize: Sizes.fonts.medium,
  },
});
