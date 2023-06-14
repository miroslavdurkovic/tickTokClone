import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TopBarButton} from '../atoms';

export const TopSegmentControl = () => {
  return (
    <View style={styles.container}>
      <TopBarButton id={0} title={'Following'} />
      <TopBarButton id={1} title={'For You'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
