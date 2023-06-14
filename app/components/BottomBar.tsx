import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomBarButton} from './BottomBarButton';
import {SelectedTheme, Sizes} from '../helpers';

export const BottomBar = () => {
  const theme = SelectedTheme();

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      <BottomBarButton iconName={'home'} text={'Home'} enabled={true} />
      <BottomBarButton iconName={'compass'} text={'Discover'} />
      <BottomBarButton iconName={'clock-o'} text={'Activity'} />
      <BottomBarButton iconName={'bookmark'} text={'Bookmarks'} />
      <BottomBarButton iconName={'user-circle'} text={'Profile'} />
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
});
