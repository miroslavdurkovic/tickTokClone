/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Home} from './app/screen';
import {BottomBar} from './app/components';
import {SelectedTheme} from './app/helpers';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = SelectedTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.backgroundColor,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <Home />
      <BottomBar />
    </SafeAreaView>
  );
}

export default App;
