import {useColorScheme} from 'react-native';

export const SelectedTheme = () => {
  const colorTheme = useColorScheme() || 'light';
  return Theme[colorTheme];
};

const Theme = {
  light: {
    barsBackgroundColor: '#FFFFFF',
    backgroundColor: '#18204d',
    primaryTextColor: '#000000',
    disabledTextColor: '#000000',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
  dark: {
    barsBackgroundColor: '#000000',
    backgroundColor: '#18204d',
    primaryTextColor: '#FFFFFF',
    disabledTextColor: '#858585',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
};
