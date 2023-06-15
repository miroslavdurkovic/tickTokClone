/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: BottomBar.tsx
 * Description: This file contains the implementation of BottomBar.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomBarButton} from './BottomBarButton';
import {SelectedTheme, Sizes} from '../helpers';

// <--- Component --->
export const BottomBar = () => {
  const theme = SelectedTheme();

  return (
    <View
      style={[
        {backgroundColor: theme.navigationBarsBackgroundColor},
        styles.container,
      ]}>
      <BottomBarButton iconName={'home'} text={'Home'} enabled={true} />
      <BottomBarButton iconName={'compass'} text={'Discover'} />
      <BottomBarButton iconName={'clock-o'} text={'Activity'} />
      <BottomBarButton iconName={'bookmark'} text={'Bookmarks'} />
      <BottomBarButton iconName={'user-circle'} text={'Profile'} />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: Sizes.size.extraLarge,
  },
});
