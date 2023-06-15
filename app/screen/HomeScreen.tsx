/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: HomeScreen.tsx
 * Description: This file contains the implementation of HomeScreen.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreenTopBar} from '../components';
import {TabContext} from '../helpers';
import {FollowingView, ForYouView} from '../views';

// <--- Component --->
export const HomeScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <View style={styles.container}>
      <TabContext.Provider value={{selectedTabIndex, setSelectedTabIndex}}>
        <HomeScreenTopBar />
        {selectedTabIndex === 0 && <FollowingView />}
        {selectedTabIndex === 1 && <ForYouView />}
      </TabContext.Provider>
    </View>
  );
};

// <--- Styles --->
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
