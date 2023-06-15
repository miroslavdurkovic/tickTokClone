/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: Flashcard.tsx
 * Description: This file contains the implementation of Flashcard.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {RateOptionsView} from './RateOptionsView';

// <--- Types --->
interface FlashCardProps {
  frontText?: string;
  backText?: string;
  description?: string;
  username?: string;
  open: boolean;
  selectedRateId: number | null;
  onRatePress: (id: number) => void;
}

// <--- Component --->
export const Flashcard = (props: FlashCardProps) => {
  const {
    frontText,
    backText,
    username,
    description,
    open,
    selectedRateId,
    onRatePress,
  } = props;
  const theme = SelectedTheme();

  return (
    <View style={styles.container}>
      <View
        style={[styles.cardContainer, open && {justifyContent: 'flex-start'}]}>
        <Text style={[{color: theme.primaryTextColor}, styles.text]}>
          {frontText}
        </Text>
        {open && (
          <View
            style={[
              {borderTopColor: theme.disabledTextColor},
              styles.backCardContainer,
            ]}>
            <Text style={[{color: theme.greenColor}, styles.answerText]}>
              {'Answer'}
            </Text>
            <Text style={[{color: theme.disabledTextColor}, styles.text]}>
              {backText}
            </Text>
            <RateOptionsView
              selectedId={selectedRateId}
              onPress={onRatePress}
            />
          </View>
        )}
      </View>
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
  backCardContainer: {
    flexGrow: 1,
    marginTop: Sizes.margin.large,
    paddingTop: Sizes.margin.large,
    borderTopWidth: Sizes.size.extraSmall,
  },
  text: {
    fontSize: Sizes.fonts.medium,
  },
  answerText: {
    fontSize: Sizes.fonts.small,
    fontWeight: 'bold',
    marginBottom: Sizes.margin.small,
  },
  usernameText: {
    fontSize: Sizes.fonts.medium,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: Sizes.fonts.small,
  },
});
