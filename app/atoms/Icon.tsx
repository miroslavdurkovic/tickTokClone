/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: Icon.tsx
 * Description: This file contains the implementation of Icon.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React from 'react';
// @ts-ignore  //3rd party - for assessment purpose ignore it
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {SelectedTheme, Sizes} from '../helpers';

// <--- Types --->
interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

// <--- Component --->
export const Icon = (props: IconProps) => {
  const theme = SelectedTheme();
  const {
    name,
    size = Sizes.size.medium,
    color = theme.primaryTextColor,
  } = props;

  return <VectorIcon name={name} size={size} color={color} />;
};
