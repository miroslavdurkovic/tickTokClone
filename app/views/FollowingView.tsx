/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: FollowingView.tsx
 * Description: This file contains the implementation of FollowingView.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Flashcard, FollowingBottomBar, VerticalActions} from '../components';
import {
  FlashCardType,
  getFollowingAction,
  SelectedTheme,
  Sizes,
} from '../helpers';

// <--- Component --->
export const FollowingView = () => {
  const theme = SelectedTheme();
  const [data, setData] = useState<FlashCardType>();
  const [flashCardOpen, setFlashCardOpen] = useState(false);

  // <--- Effects --->
  useEffect(() => {
    getNextData();
  }, []);

  // <--- Functions --->
  const getNextData = () => {
    getFollowingAction()
      .then(responseData => {
        setFlashCardOpen(false);
        setData(responseData);
      })
      .catch(error => console.log('Error: ', error));
  };

  // <--- Actions --->
  const handleCardPress = () => {
    setFlashCardOpen(!flashCardOpen);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          {backgroundColor: theme.backgroundColor},
          styles.innerContainer,
        ]}>
        <ScrollView
          onMomentumScrollEnd={getNextData}
          contentContainerStyle={styles.scrollViewContainer}>
          <Pressable onPress={handleCardPress}>
            <Flashcard
              frontText={data?.flashcard_front}
              backText={data?.flashcard_back}
              description={data?.description}
              username={data?.user?.name}
              open={flashCardOpen}
            />
          </Pressable>
        </ScrollView>
        <VerticalActions />
      </View>
      <FollowingBottomBar text={data?.playlist} />
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: Sizes.margin.medium,
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
