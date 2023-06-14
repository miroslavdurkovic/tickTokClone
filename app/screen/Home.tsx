import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreenTopBar} from '../components';
import {TabContext} from '../helpers';
import {FollowingView, ForYouView} from '../views';

export const Home = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
