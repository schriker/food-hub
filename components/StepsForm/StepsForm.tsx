import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { StepsFormProps } from '../../types/stepsForm';
import Input from '../Input/Input';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import StepsTab from '../StepsTab/StepsTab';

export default function StepsForm({ steps, error, addStep }: StepsFormProps) {
  const [step, setStep] = useState('');

  const handleAdd = () => {
    if (step.length === 0) return;
    addStep(step);
    setStep('');
  };

  return (
    <View>
      <View style={styles.whiteBg}>
        <StepsTab steps={steps} />
      </View>
      <Input
        onChangeText={(text) => setStep(text)}
        value={step}
        label="Step"
        error={error}
        errorMessage="Required"
      />
      <PrimaryButton title="Add Step" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  whiteBg: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginBottom: 10,
  },
});
