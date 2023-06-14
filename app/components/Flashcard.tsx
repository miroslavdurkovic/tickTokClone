import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';

interface FlashCardProps {
  frontText?: string;
  backText?: string;
  description?: string;
  username?: string;
  open: boolean;
}
export const Flashcard = (props: FlashCardProps) => {
  const {frontText, backText, username, description, open} = props;
  const theme = SelectedTheme();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
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
    marginTop: Sizes.margin.large,
    paddingTop: Sizes.margin.large,
    borderTopWidth: Sizes.size.extraSmall,
  },
  text: {
    fontSize: Sizes.fonts.large,
  },
  answerText: {
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
