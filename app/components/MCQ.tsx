/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: MCQ.tsx
 * Description: This file contains the implementation of MCQ.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {checkCorrectAnswer, OptionType, SelectedTheme, Sizes} from '../helpers';
import {MSQOption} from './MSQOption';

// <--- Types --->
interface MCQProps {
  description?: string;
  username?: string;
  options?: [OptionType];
  question?: string;
  id?: number;
}

// <--- Component --->
export const MCQ = (props: MCQProps) => {
  const {username, description, options = [], question, id: questionId} = props;
  const theme = SelectedTheme();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

  // <--- Effects --->
  useEffect(() => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
  }, [props]);

  // <--- Functions --->
  const checkAnswer = () => {
    if (questionId) {
      checkCorrectAnswer(questionId)
        .then(responseData => {
          setCorrectAnswer(responseData?.correct_options?.[0].id);
        })
        .catch(error => console.log('Error: ', error));
    }
  };

  // <--- Actions --->
  const handleCardPress = (id: string) => {
    setSelectedAnswer(id);
    checkAnswer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[{color: theme.primaryTextColor}, styles.text]}>
          {question}
        </Text>
      </View>
      {options.map((option, index) => (
        <MSQOption
          option={option}
          onPress={handleCardPress}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          key={index}
        />
      ))}
      <Text style={[{color: theme.primaryTextColor}, styles.usernameText]}>
        {username}
      </Text>
      <Text style={[{color: theme.primaryTextColor}, styles.descriptionText]}>
        {description}
      </Text>
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: Sizes.margin.medium,
  },
  cardContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: Sizes.fonts.medium,
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: Sizes.fonts.medium,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: Sizes.fonts.small,
  },
});
