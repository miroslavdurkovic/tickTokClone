import {SelectedTheme, Sizes} from '../helpers';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from './Icon';

export const Clock = () => {
  const theme = SelectedTheme();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTimeString = () => {
    // Perform time calculations
    const seconds = counter % 60;
    const minutes = Math.floor((counter / 60) % 60);

    // Format numbers with leading zeros
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds} m`;
  };

  return (
    <View style={styles.container}>
      <Icon name={'clock-o'} color={theme.disabledTextColor} />
      <Text style={[{color: theme.disabledTextColor}, styles.text]}>
        {getTimeString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: Sizes.margin.small,
    fontSize: Sizes.fonts.small,
  },
});
