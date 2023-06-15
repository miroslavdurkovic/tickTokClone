/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: Theme.ts
 * Description: This file contains the implementation of Theme.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import {useColorScheme} from 'react-native';

// <--- Functions --->
export const SelectedTheme = () => {
  const colorTheme = useColorScheme() || 'light';
  return Theme[colorTheme];
};

// <--- Theme definitions --->
const Theme = {
  light: {
    navigationBarsBackgroundColor: '#FFFFFF',
    barBackgroundColor: '#161616',
    backgroundColor: '#003042',
    backgroundAnswerColor: '#335d6d',
    backgroundAnswerCorrectColor: '#27b18f',
    backgroundAnswerIncorrectColor: '#dc5f5f',
    primaryTextColor: '#000000',
    disabledTextColor: '#000000',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
  dark: {
    navigationBarsBackgroundColor: '#000000',
    barBackgroundColor: '#161616',
    backgroundColor: '#003042',
    backgroundAnswerColor: '#335d6d',
    backgroundAnswerCorrectColor: '#27b18f',
    backgroundAnswerIncorrectColor: '#dc5f5f',
    primaryTextColor: '#FFFFFF',
    disabledTextColor: '#858585',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
};
