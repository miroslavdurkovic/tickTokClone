/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: RateOptionView.tsx
 * Description: This file contains the implementation of RateOptionView.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {RateOption} from './RateOption';

// <--- Types --->
interface RateOptionViewProps {
  selectedId: number | null;
  onPress: (id: number) => void;
}

// <--- Component --->
export const RateOptionsView = (props: RateOptionViewProps) => {
  const {selectedId, onPress} = props;
  const theme = SelectedTheme();

  const options = [
    {
      text: 1,
      color: theme.rateOption1,
    },
    {
      text: 2,
      color: theme.rateOption2,
    },
    {
      text: 3,
      color: theme.rateOption3,
    },
    {
      text: 4,
      color: theme.rateOption4,
    },
    {
      text: 5,
      color: theme.rateOption5,
    },
  ];

  const selectedOption = options.find(option => option.text === selectedId);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: theme.disabledTextColor}]}>
        {'How well did you know this?'}
      </Text>
      <View style={styles.rowContainer}>
        {selectedOption && (
          <RateOption
            text={selectedOption.text}
            color={selectedOption.color}
            onPress={onPress}
          />
        )}
        {!selectedOption &&
          options.map(option => (
            <RateOption
              text={option.text}
              color={option.color}
              onPress={onPress}
            />
          ))}
      </View>
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Sizes.margin.large,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: Sizes.fonts.medium,
  },
});
