import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as yup from 'yup';
import AddPhoto from '../components/AddPhoto/AddPhoto';
import IngredientsForm from '../components/IngredientsForm/IngredientsForm';
import Input from '../components/Input/Input';
import ModalizePicker from '../components/ModalizePicker/ModalizePicker';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import StepsForm from '../components/StepsForm/StepsForm';
import { categories } from '../data/categories';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { addRecipe } from '../store/slices/recipesSlice';
import { Ingredient } from '../types/ingredient';
import { Level, Recipe } from '../types/recipe';

const schema = yup
  .object({
    photo: yup.string().required(),
    name: yup.string().required(),
    time: yup.string().required(),
    kcal: yup.number().min(1).required(),
    level: yup.string().required(),
    categoryId: yup.number().required(),
    steps: yup.array().of(yup.string()).min(1).required(),
    ingredients: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
          amount: yup.string().required(),
        })
      )
      .min(1)
      .required(),
  })
  .required();

export default function AddScreen() {
  const navigation = useNavigation();
  const recipes = useAppSelector((state) => state.recipes.data);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<Recipe>({
    resolver: yupResolver(schema),
    defaultValues: {
      steps: [],
      ingredients: [],
    },
  });

  const TEXT_INPUTS = [
    {
      name: 'name',
      label: 'Recipe name',
      errorMessage: 'Required',
      error: errors.name,
    },
    {
      name: 'time',
      label: 'Time',
      errorMessage: 'Required',
      error: errors.time,
    },
    {
      name: 'kcal',
      label: 'Kcal',
      errorMessage: 'Required',
      error: errors.kcal,
    },
  ];

  const onLevelSelect = (value: Level) => {
    setValue('level', value);
  };

  const onCategorySelect = (categoryName: string) => {
    const category = categories.find((item) => item.name === categoryName);
    setValue('categoryId', category?.id!);
  };

  const addStep = (step: string) => {
    setValue('steps', [...getValues('steps'), step]);
  };

  const addIngredient = (ingredient: Ingredient) => {
    setValue('ingredients', [...getValues('ingredients'), ingredient]);
  };

  const addPhoto = (file: string) => {
    setValue('photo', file);
  };

  const onSubmit = (data: Recipe) => {
    const id = recipes[recipes.length - 1].id + 1;
    dispatch(
      addRecipe({
        ...data,
        id,
      })
    );
    reset();
    navigation.navigate('Recipe', { id });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView style={styles.container}>
        <AddPhoto
          image={watch('photo')}
          onSelected={addPhoto}
          error={errors.photo}
        />
        {TEXT_INPUTS.map((item, index) => (
          <Controller
            key={index}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                label={item.label}
                error={item.error}
                errorMessage="Required"
              />
            )}
            name={item.name as keyof Recipe}
          />
        ))}
        <ModalizePicker
          error={errors.level}
          errorMessage="Required"
          label="Choose level"
          buttonText="Level"
          value={getValues('level')}
          options={[
            {
              label: 'Easy',
              value: Level.EASY,
            },
            {
              label: 'Medium',
              value: Level.MEDIUM,
            },
            {
              label: 'Hard',
              value: Level.HARD,
            },
          ]}
          onSelected={onLevelSelect}
        />
        <ModalizePicker
          error={errors.categoryId}
          errorMessage="Required"
          label="Choose category"
          buttonText="Category"
          value={getValues('categoryId')}
          options={categories.map((category) => ({
            label: category.name,
            value: category.name,
          }))}
          onSelected={onCategorySelect}
        />
        <StepsForm
          steps={watch('steps')}
          error={errors.steps as unknown as FieldError}
          addStep={addStep}
        />
        <IngredientsForm
          ingredients={watch('ingredients')}
          addIngredient={addIngredient}
          error={errors.ingredients as unknown as FieldError}
        />
        <PrimaryButton title="Submit" onPress={handleSubmit(onSubmit)} />
        <View style={styles.spacer}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  spacer: {
    height: 150,
  },
});
