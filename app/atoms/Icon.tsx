import React from 'react';
// @ts-ignore  //3rd party - for assessment purpose ignore it
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {SelectedTheme, Sizes} from '../helpers';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon = (props: IconProps) => {
  const theme = SelectedTheme();
  const {
    name,
    size = Sizes.size.medium,
    color = theme.primaryTextColor,
  } = props;

  return <VectorIcon name={name} size={size} color={color} />;
};
