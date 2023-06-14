import React, {useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import {SelectedTheme, Sizes, TabContext} from '../helpers';

interface TopBarProps {
  id: number;
  title: string;
}

export const TopBarButton = (props: TopBarProps) => {
  const theme = SelectedTheme();
  const {selectedTabIndex, setSelectedTabIndex} = useContext(TabContext);

  const {id, title} = props;
  const isSelected = id === selectedTabIndex;

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
              : theme.backgroundColor,
          },
          styles.bottomDash,
        ]}
      />
    </View>
  );
};

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
