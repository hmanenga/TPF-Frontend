import React from 'react';
import { View, ViewStyle } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import  {RadioButtonProps}  from '../../types/types'; // Adjust the import based on your file structure
import { LightThemeColors } from '../../config/colors';

interface CustomRadioButtonProps {
  radioButtons: RadioButtonProps[]; // Array of radio button options
  selectedId?: string; // Optional selected ID
  onPress: (value: string) => void; // Callback function for when a radio button is selected
  layout?: 'row' | 'column'; // Optional layout for the radio buttons
  containerStyle?: ViewStyle; // Optional style for the container
}

export default function CustomRadioButton({
    radioButtons,
    selectedId = '1',
    onPress,
    layout = 'row',
    containerStyle,
  }: CustomRadioButtonProps): React.ReactElement {
  // Render the radio button group
  return (
    <View style={containerStyle}>
      <RadioGroup
        labelStyle={{color: LightThemeColors.text}}
        radioButtons={radioButtons}
        onPress={onPress}
        selectedId={selectedId}
        layout={layout}
      />
    </View>
  );
};
