import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Colors from '../../constants/Colors';
import { ModalizePickerProps } from '../../types/modalizePicker';
import Paragraph from '../Paragraph/Paragraph';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function ModalizePicker({
  options,
  onSelected,
  buttonText,
  label,
  error,
  errorMessage,
}: ModalizePickerProps) {
  const [selectedOption, setSelectedOption] = useState();
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleSelect = (value: any) => {
    setSelectedOption(value);
    onSelected(value);
  };

  return (
    <View style={styles.container}>
      <Paragraph style={styles.label}>{label}</Paragraph>
      <PrimaryButton
        onPress={onOpen}
        title={`${selectedOption ?? buttonText}`}
      />
      {error && <Paragraph style={styles.error}>{errorMessage}</Paragraph>}
      <Portal>
        <Modalize ref={modalizeRef} adjustToContentHeight>
          <Picker selectedValue={selectedOption} onValueChange={handleSelect}>
            <Picker.Item label={buttonText} enabled={false} />
            {options.map((option, index) => (
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </Modalize>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 5,
  },
  error: {
    color: 'red',
  },
});
