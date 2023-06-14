import {useColorScheme} from 'react-native';

export const SelectedTheme = () => {
  const colorTheme = useColorScheme() || 'light';
  return Theme[colorTheme];
};

const Theme = {
  light: {
    backgroundColor: '#FFFFFF',
    primaryTextColor: '#000000',
    disabledTextColor: '#000000',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
  dark: {
    backgroundColor: '#000000',
    primaryTextColor: '#FFFFFF',
    disabledTextColor: '#858585',
    greenColor: '#4ab580',
    yellowColor: '#ffbc00',
  },
};
