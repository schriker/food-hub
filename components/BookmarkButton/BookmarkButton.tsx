import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RecipeScreenRouteProp } from '../../navigation/types';
import {
  addToBookmars,
  isBookmarked,
  removeFromBookmarks,
} from '../../store/slices/recipesSlice';
import { BookmarkButtonProps } from '../../types/bookmakrButton';

export default function BookmarkButton({ recipeId }: BookmarkButtonProps) {
  const scale = useSharedValue(1);
  const route = useRoute<RecipeScreenRouteProp>();
  const id = recipeId ?? route.params.id;
  const dipstach = useAppDispatch();
  const bookmarked = useAppSelector((state) => isBookmarked(state, id));

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const handlePress = () => {
    scale.value = withSequence(
      withTiming(1.3, { duration: 150 }),
      withTiming(1, { duration: 150 })
    );
    if (bookmarked) {
      dipstach(removeFromBookmarks(id));
    } else {
      dipstach(addToBookmars(id));
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={animatedStyles}>
        <Feather
          size={25}
          name="bookmark"
          color={bookmarked ? Colors.main : Colors.black}
        />
      </Animated.View>
    </Pressable>
  );
}
