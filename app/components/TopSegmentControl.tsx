/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: TopSegmentControl.tsx
 * Description: This file contains the implementation of TopSegmentControl.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TopBarButton} from '../atoms';

// <--- Component --->
export const TopSegmentControl = () => {
  return (
    <View style={styles.container}>
      <TopBarButton id={0} title={'Following'} />
      <TopBarButton id={1} title={'For You'} />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
