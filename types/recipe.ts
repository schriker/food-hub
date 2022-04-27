import { Ingredient } from './ingredient';

export enum Level {
  EASY,
  MEDIUM,
  HARD,
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  steps: string[];
  ingredients: Ingredient[];
  time: string;
  kcal: number;
  level: Level;
  photo: string;
  categoryId: number;
}
