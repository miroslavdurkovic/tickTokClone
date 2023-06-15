/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: Networking.ts
 * Description: This file contains the implementation of Networking.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Types --->
interface UserType {
  name: string;
  avatar: string;
}

export interface OptionType {
  id: string;
  answer: string;
}

export interface FlashCardType {
  type: string;
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: UserType;
}

export interface MCQType {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: [OptionType];
  user: UserType;
}

export interface CorrectAnswerType {
  id: number;
  correct_options: [
    {
      id: string;
      answer: string;
    },
  ];
}

// <--- Functions --->
export const getFollowingAction = async () => {
  try {
    const response = await fetch(
      'https://cross-platform.rp.devfactory.com/following',
    );
    const data: FlashCardType = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getForYouAction = async () => {
  try {
    const response = await fetch(
      'https://cross-platform.rp.devfactory.com/for_you',
    );
    const data: MCQType = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkCorrectAnswer = async (answerId: number) => {
  try {
    const encodedValue = encodeURIComponent(answerId);
    const response = await fetch(
      `https://cross-platform.rp.devfactory.com/reveal?id=${encodedValue}`,
    );
    const data: CorrectAnswerType = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
