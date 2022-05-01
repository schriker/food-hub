import { Ingredient } from './ingredient';

export enum Level {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}

export interface Recipe {
  id: number;
  name: string;
  time: string;
  kcal: number;
  photo: string;
  level: Level;
  categoryId: number;
  steps: string[];
  ingredients: Ingredient[];
}
