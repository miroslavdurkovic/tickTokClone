import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalActions} from '../components';
import {Sizes} from '../helpers';

export const FollowingView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leftInnerContainer}></View>
        <VerticalActions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Sizes.margin.medium,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftInnerContainer: {
    flexGrow: 1,
  },
  rightInnerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
