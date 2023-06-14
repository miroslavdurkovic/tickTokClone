import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Flashcard, FollowingBottomBar, VerticalActions} from '../components';
import {
  FlashCardType,
  getFollowingAction,
  SelectedTheme,
  Sizes,
} from '../helpers';

export const FollowingView = () => {
  const theme = SelectedTheme();
  const [data, setData] = useState<FlashCardType>();
  const [flashCardOpen, setFlashCardOpen] = useState(false);

  useEffect(() => {
    getNextData();
  }, []);

  const getNextData = () => {
    getFollowingAction()
      .then(responseData => {
        setFlashCardOpen(false);
        setData(responseData);
      })
      .catch(error => console.log('Error: ', error));
  };

  const handleCardPress = () => {
    setFlashCardOpen(!flashCardOpen);
  };

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      <View style={styles.innerContainer}>
        <ScrollView
          onMomentumScrollEnd={getNextData}
          contentContainerStyle={styles.innerContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Sizes.margin.medium,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftInnerContainer: {
    flexGrow: 1,
  },
});
