/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: VerticalActions.tsx
 * Description: This file contains the implementation of VerticalActions.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectedTheme} from '../helpers';
import {ActionIcon} from './ActionIcon';

// <--- Component --->
export const VerticalActions = () => {
  const theme = SelectedTheme();

  return (
    <View style={styles.container}>
      <ActionIcon iconName={'file'} iconBackgroundColor={theme.yellowColor} />
      <ActionIcon iconName={'heart'} text={'87'} />
      <ActionIcon iconName={'commenting'} text={'2'} />
      <ActionIcon iconName={'bookmark'} text={'203'} />
      <ActionIcon iconName={'share'} text={'17'} />
      <ActionIcon
        iconName={'refresh'}
        text={'Flip'}
        iconBackgroundColor={theme.greenColor}
      />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
