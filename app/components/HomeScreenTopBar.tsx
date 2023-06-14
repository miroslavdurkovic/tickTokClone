import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SelectedTheme} from '../helpers';
import {Icon} from '../atoms/Icon';
import {TopSegmentControl} from './TopSegmentControl';

export const HomeScreenTopBar = () => {
  const theme = SelectedTheme();

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      <View style={styles.leftViewContainer}>
        <Icon name={'clock-o'} size={20} color={theme.disabledTextColor} />
        <Text
          style={[
            {color: theme.disabledTextColor},
            styles.text,
          ]}>{`${10}m`}</Text>
      </View>
      <TopSegmentControl />
      <Icon name={'search'} size={20} color={theme.disabledTextColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 60,
  },
  leftViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
  },
});
