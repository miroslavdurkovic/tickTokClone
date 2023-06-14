import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms/Icon';
import {TopSegmentControl} from './TopSegmentControl';

export const HomeScreenTopBar = () => {
  const theme = SelectedTheme();

  return (
    <View
      style={[{backgroundColor: theme.barsBackgroundColor}, styles.container]}>
      <View style={styles.leftViewContainer}>
        <Icon name={'clock-o'} color={theme.disabledTextColor} />
        <Text
          style={[
            {color: theme.disabledTextColor},
            styles.text,
          ]}>{`${10}m`}</Text>
      </View>
      <TopSegmentControl />
      <Icon name={'search'} color={theme.disabledTextColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: Sizes.size.extraLarge,
  },
  leftViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
