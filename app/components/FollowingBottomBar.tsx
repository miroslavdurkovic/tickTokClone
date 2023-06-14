import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectedTheme, Sizes} from '../helpers';
import {Icon} from '../atoms/Icon';

interface FollowingBottomBarProps {
  text?: string;
}
export const FollowingBottomBar = (props: FollowingBottomBarProps) => {
  const theme = SelectedTheme();
  const {text} = props;

  if (!text) {
    return null;
  }

  return (
    <View
      style={[{backgroundColor: theme.barsBackgroundColor}, styles.container]}>
      <View style={styles.rightContainer}>
        <Icon name={'youtube-play'} />
        <Text
          style={[
            {color: theme.primaryTextColor},
            styles.text,
          ]}>{`Playlist: ${text}`}</Text>
      </View>
      <Icon name={'chevron-right'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: Sizes.margin.medium,
  },
  rightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
  text: {
    marginLeft: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
    fontWeight: 'bold',
  },
});
