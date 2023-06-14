/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Home} from './app/screen';
import {BottomBar} from './app/components';
import {SelectedTheme} from './app/helpers';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = SelectedTheme();

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.barsBackgroundColor,
        },
        styles.container,
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.barsBackgroundColor}
      />
      <View style={styles.container}>
        <Home />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
