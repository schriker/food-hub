import { StyleSheet, View } from 'react-native';
import { useForm, Controller, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Level, Recipe } from '../types/recipe';
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import Input from '../components/Input/Input';
import { ScrollView } from 'react-native-gesture-handler';
import ModalizePicker from '../components/ModalizePicker/ModalizePicker';
import { categories } from '../data/categories';
import StepsTab from '../components/StepsTab/StepsTab';
import Colors from '../constants/Colors';
import IngredientsTab from '../components/IngredientsTab/IngredientsTab';

const schema = yup
  .object({
    name: yup.string().required(),
    time: yup.string().required(),
    kcal: yup.number().required(),
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
  const [step, setStep] = useState('');
  const [ingredien, setIngredient] = useState('');
  const [ingredienAmount, setIngredientAmount] = useState('');

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
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

  const addStep = () => {
    setValue('steps', [...getValues('steps'), step]);
    setStep('');
  };

  const addIngredient = () => {
    if (ingredien.length === 0 || ingredienAmount.length === 0) return;

    setValue('ingredients', [
      ...getValues('ingredients'),
      { amount: ingredienAmount, name: ingredien },
    ]);
    setIngredient('');
    setIngredientAmount('');
  };

  const onSubmit = (data: Recipe) => {
    console.log(data);
    reset();
  };

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
      <View style={styles.whiteBg}>
        <StepsTab steps={getValues('steps')} />
      </View>
      <Input
        onChangeText={(text) => setStep(text)}
        value={step}
        label="Step"
        error={errors.steps as unknown as FieldError}
        errorMessage="Required"
      />
      <PrimaryButton title="Add Step" onPress={addStep} />
      <View style={styles.ingredientsForm}>
        <View style={styles.whiteBg}>
          <IngredientsTab ingredients={getValues('ingredients')} />
        </View>
        <Input
          onChangeText={(text) => setIngredient(text)}
          value={ingredien}
          label="Ingredient"
          error={errors.ingredients as unknown as FieldError}
          errorMessage="Required"
        />
        <Input
          onChangeText={(text) => setIngredientAmount(text)}
          value={ingredienAmount}
          label="Ingredient amount"
          error={errors.ingredients as unknown as FieldError}
          errorMessage="Required"
        />
        <PrimaryButton title="Add Ingredient" onPress={addIngredient} />
      </View>

      <PrimaryButton title="Submit" onPress={handleSubmit(onSubmit)} />
      <View style={styles.spacer}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  spacer: {
    height: 150,
  },
  ingredientsForm: {
    marginVertical: 20,
  },
  whiteBg: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginBottom: 10,
  },
});
