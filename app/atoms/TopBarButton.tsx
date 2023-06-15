/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: TopBarButton.tsx
 * Description: This file contains the implementation of TopBarButton.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React, {useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import {SelectedTheme, Sizes, TabContext} from '../helpers';

// <--- Types --->
interface TopBarProps {
  id: number;
  title: string;
}

// <--- Component --->
export const TopBarButton = (props: TopBarProps) => {
  const theme = SelectedTheme();
  const {selectedTabIndex, setSelectedTabIndex} = useContext(TabContext);

  const {id, title} = props;
  const isSelected = id === selectedTabIndex;

  // <--- Actions --->
  const handleOnPress = () => {
    setSelectedTabIndex && setSelectedTabIndex(id);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <Text style={[{color: theme.primaryTextColor}, styles.text]}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
      <View
        style={[
          {
            backgroundColor: isSelected
              ? theme.primaryTextColor
              : theme.navigationBarsBackgroundColor,
          },
          styles.bottomDash,
        ]}
      />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: Sizes.margin.small,
  },
  text: {
    marginTop: Sizes.margin.small,
    fontSize: Sizes.fonts.medium,
  },
  bottomDash: {
    width: Sizes.size.large,
    height: Sizes.size.extraSmall,
    marginTop: Sizes.margin.small,
  },
});
