import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Clock, Icon} from '../atoms';
import {TopSegmentControl} from './TopSegmentControl';

export const HomeScreenTopBar = () => {
  const theme = SelectedTheme();

  return (
    <View
      style={[{backgroundColor: theme.barsBackgroundColor}, styles.container]}>
      <Clock />
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
  text: {
    marginLeft: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
