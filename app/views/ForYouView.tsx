/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: ForYouView.tsx
 * Description: This file contains the implementation of ForYouView.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {getForYouAction, MCQType, SelectedTheme, Sizes} from '../helpers';
import {FollowingBottomBar, MCQ, VerticalActions} from '../components';

// <--- Component --->
export const ForYouView = () => {
  const theme = SelectedTheme();
  const [data, setData] = useState<MCQType>();

  // <--- Effects --->
  useEffect(() => {
    getNextData();
  }, []);

  // <--- Functions --->
  const getNextData = () => {
    getForYouAction()
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => console.log('Error: ', error));
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
          <MCQ
            description={data?.description}
            username={data?.user?.name}
            options={data?.options}
            question={data?.question}
            id={data?.id}
          />
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
