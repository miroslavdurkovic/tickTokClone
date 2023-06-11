import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomBarButton} from './BottomBarButton';
import {SelectedTheme} from '../helpers';

export const BottomBar = () => {
  const theme = SelectedTheme();

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      <BottomBarButton
        iconName={'home'}
        iconSize={24}
        text={'Home'}
        enabled={true}
      />
      <BottomBarButton
        iconName={'compass'}
        iconSize={24}
        text={'Discover'}
        enabled={false}
      />
      <BottomBarButton
        iconName={'clock-o'}
        iconSize={24}
        text={'Activity'}
        enabled={false}
      />
      <BottomBarButton
        iconName={'bookmark'}
        iconSize={24}
        text={'Bookmarks'}
        enabled={false}
      />
      <BottomBarButton
        iconName={'user-circle'}
        iconSize={24}
        text={'Profile'}
        enabled={false}
      />
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
});
