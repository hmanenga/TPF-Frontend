import React, { memo } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from './styles';
import { variants } from './variants';
import  AntDesign  from 'react-native-vector-icons/AntDesign'; // Make sure to import AntDesign
import { Load } from '../Load/Load';
import { STANDARD_BUTTON_ICON_SIZE } from '../../config/constants';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
  iconName?: string;
  iconSize?: number | null;
  disabled?: boolean;
  variant?: keyof typeof variants; 
  style?: object;
  fontSize?: number | null;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  isLoading = false,
  iconName,
  iconSize = null,
  disabled = false,
  variant = "primary",
  style,
  fontSize = null
}) => {
  const buttonVariant = variants[variant];

  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, buttonStyle.button, style]}
    >
      {isLoading ? (
        <Load />
      ) : (
        <View style={styles.content}>
          {iconName && (
            <AntDesign
              style={{ marginRight: 12 }}
              name={iconName}
              size={iconSize || STANDARD_BUTTON_ICON_SIZE}
              color={buttonStyle.icon.color}
            />
          )}
          {title && (
            <Text style={[styles.title, { color: buttonStyle.title.color, fontSize: fontSize || hp(1.7) }]}>
              {title}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(CustomButton);
