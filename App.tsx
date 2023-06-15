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

import {HomeScreen} from './app/screen';
import {BottomBar} from './app/components';
import {SelectedTheme} from './app/helpers';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = SelectedTheme();

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.navigationBarsBackgroundColor,
        },
        styles.container,
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.navigationBarsBackgroundColor}
      />
      <View style={styles.container}>
        <HomeScreen />
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
