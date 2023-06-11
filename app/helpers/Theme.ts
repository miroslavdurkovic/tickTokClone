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
  },
  dark: {
    backgroundColor: '#000000',
    primaryTextColor: '#FFFFFF',
    disabledTextColor: '#555555',
  },
};
