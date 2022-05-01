import { StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Level, Recipe } from '../types/recipe';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import Input from '../components/Input/Input';
import { ScrollView } from 'react-native-gesture-handler';
import ModalizePicker from '../components/ModalizePicker/ModalizePicker';
import { categories } from '../data/categories';

const schema = yup
  .object({
    name: yup.string().required(),
    time: yup.string().required(),
    kcal: yup.number().required(),
    level: yup.string().required(),
    categoryId: yup.number().required(),
  })
  .required();

export default function AddScreen() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Recipe>({
    resolver: yupResolver(schema),
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

  const onSubmit = (data: Recipe) => console.log(data);

  return (
    <ScrollView style={styles.container}>
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
        options={categories.map((category) => ({
          label: category.name,
          value: category.name,
        }))}
        onSelected={onCategorySelect}
      />
      <PrimaryButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 130,
  },
});
