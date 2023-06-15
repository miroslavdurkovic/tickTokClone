/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: MSQOption.tsx
 * Description: This file contains the implementation of MSQOption.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {OptionType, SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms';

// <--- Types --->
interface MSQOptionProps {
  option: OptionType;
  selectedAnswer?: string | null;
  correctAnswer?: string | null;
  onPress: (id: string) => void;
}

// <--- Component --->
export const MSQOption = (props: MSQOptionProps) => {
  const {option, onPress, selectedAnswer, correctAnswer} = props;
  const theme = SelectedTheme();

  // <--- Actions --->
  const handleOnPress = () => {
    onPress && onPress(option?.id);
  };

  // <--- Conditions --->
  // check if this option is selected and is correct
  const mySelectedIsCorrect =
    option.id === selectedAnswer && selectedAnswer === correctAnswer;
  // check if this option is selected and is not correct
  const mySelectedIsIncorrect =
    option.id === selectedAnswer &&
    correctAnswer &&
    selectedAnswer !== correctAnswer;
  // check if this option is not selected but is correct
  const currentIsCorrect =
    option.id !== selectedAnswer && option.id === correctAnswer;

  let color, iconName;
  if (mySelectedIsCorrect || currentIsCorrect) {
    color = theme.backgroundAnswerCorrectColor;
    iconName = 'check-circle';
  } else if (mySelectedIsIncorrect) {
    color = theme.backgroundAnswerIncorrectColor;
    iconName = 'times-circle';
  }

  return (
    <TouchableOpacity
      id={option?.id}
      onPress={handleOnPress}
      disabled={!!correctAnswer}
      style={[
        {backgroundColor: color || theme.backgroundAnswerColor},
        styles.container,
      ]}>
      <Text
        numberOfLines={1}
        style={[{color: theme.primaryTextColor}, styles.text]}>
        {option?.answer}
      </Text>
      {iconName && <Icon name={iconName} />}
    </TouchableOpacity>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.margin.medium,
    paddingVertical: Sizes.margin.normal,
    marginBottom: Sizes.margin.small,
    borderRadius: Sizes.size.small,
    flexDirection: 'row',
  },
  text: {
    fontSize: Sizes.fonts.medium,
    flexShrink: 1,
  },
});
