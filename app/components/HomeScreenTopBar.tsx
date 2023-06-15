/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: HomeScreenTopBar.tsx
 * Description: This file contains the implementation of HomeScreenTopBar.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Clock, Icon} from '../atoms';
import {TopSegmentControl} from './TopSegmentControl';

// <--- Component --->
export const HomeScreenTopBar = () => {
  const theme = SelectedTheme();

  return (
    <View
      style={[
        {backgroundColor: theme.navigationBarsBackgroundColor},
        styles.container,
      ]}>
      <Clock />
      <TopSegmentControl />
      <Icon name={'search'} color={theme.disabledTextColor} />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Sizes.size.extraLarge,
    marginHorizontal: Sizes.margin.medium,
  },
  text: {
    marginLeft: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
