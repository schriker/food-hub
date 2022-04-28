import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  addToBookmars,
  isBookmarked,
  removeFromBookmarks,
} from '../../store/slices/recipesSlice';
import { BookmarkButtonProps } from '../../types/bookmakrButton';

export default function BookmarkButton({ recipeId }: BookmarkButtonProps) {
  const dipstach = useAppDispatch();
  const bookmarked = useAppSelector((state) => isBookmarked(state, recipeId));

  const handlePress = () => {
    if (bookmarked) {
      dipstach(removeFromBookmarks(recipeId));
    } else {
      dipstach(addToBookmars(recipeId));
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Feather
        size={25}
        name="bookmark"
        color={bookmarked ? Colors.main : Colors.black}
      />
    </Pressable>
  );
}
