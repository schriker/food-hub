import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
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
  const route = useRoute<RecipeScreenRouteProp>();
  const id = recipeId ?? route.params.id;
  const dipstach = useAppDispatch();
  const bookmarked = useAppSelector((state) => isBookmarked(state, id));

  const handlePress = () => {
    if (bookmarked) {
      dipstach(removeFromBookmarks(id));
    } else {
      dipstach(addToBookmars(id));
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
