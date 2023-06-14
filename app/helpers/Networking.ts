interface User {
  name: string;
  avatar: string;
}

export interface FlashCardType {
  type: string;
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: User;
}

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
