/**
 * This function represents the RegistrationScreen component, which is part of a mobile application.
 * The screen is responsible for displaying a form for users to create a new account.
 * It includes input fields for user name, email, password, and confirm password.
 *
 * @param props - The props passed to the component. Currently, no props are used.
 * @returns - A React Native component that renders the registration screen.
 */

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import {View, TextInput, Pressable, SafeAreaView, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { ICON_SIZE } from '../../config/constants';
import { DarkThemeColors } from '../../config/colors';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {validateEmail, validatePassword} from '../../utils/validations';

export default function RegistrationScreen() {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigation = useNavigation();

  const handleSubmit = () => {
    // TODO: Implement the logic to create a new account
    // Example: save the user information to the database and navigate to the main screen
    console.log(
      'Creating account with:',
      userName,
      email,
      password,
      confirmPassword,
    );
    validateFields();
  };
  /**
   * Validates the input fields of the task form.
   * Sets error messages for empty fields and updates the errors state.
   * If all fields are valid, calls the handleAddTask function.
   */
  const validateFields = () => {
    const newErrors = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!userName.trim()) {
      newErrors.userName = 'User name is missing';
    } else {
      newErrors.userName = '';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is missing';
    } else {
      if (!validateEmail(email)) {
        newErrors.email = 'Invalid email format';
      } else {
        newErrors.email = '';
      }
    }

    if (!password.trim()) {
      newErrors.password = 'Password is missing';
    } else {
      if (!validatePassword(password)) {
        newErrors.password = 'Password must be bigger than 6 characters';
      } else {
        newErrors.password = '';
      }
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is missing';
    } else {
      if(confirmPassword.trim()!==password.trim()) {
        newErrors.confirmPassword = 'password must be equal to confirmation password';
      }else {
        newErrors.confirmPassword = '';
      }
    }
    if (Object.values(newErrors).every(error => error === '')) {
      setErrors(newErrors);
      handleRegisterUser();
      navigation.navigate('HomeScreen');
    } else {
      setErrors(newErrors);
    }
  };

  const handleRegisterUser = () => {
    // TODO: Implement the logic to register the user
    // Example: save the user information to the database
    console.log(
      'Registering user:',
      userName,
      email,
      password,
      confirmPassword,
    );
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <View>
        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitle}>Create account</Text>
        </View>
        {/* User name input field*/}
        <View style={styles.inputContainer}>
          <FontAwesome
            name={'user'}
            size={ICON_SIZES.medium}
            color={colors.gray}
          />
          <TextInput
            style={styles.textInput}
            value={userName}
            placeholder="User name"
            onChangeText={setUserName}
            keyboardType="email-address"
            autoCapitalize="none"
            accessible={true}
            accessibilityLabel="User name input"
          />
        </View>
        {errors.userName ? (
          <Text style={styles.error}>{errors.userName}</Text>
        ) : null}

        {/* Email name input field*/}
        <View style={styles.inputContainer}>
          <Fontisto
            name={'email'}
            size={ICON_SIZES.medium}
            color={colors.gray}
          />
          <TextInput
            style={styles.textInput}
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            accessible={true}
            accessibilityLabel="Email Input"
          />
        </View>
        {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

        {/* Password input  */}
        <View style={styles.inputContainer}>
          <Fontisto
            style={styles.inputIcon}
            name={'locked'}
            size={ICON_SIZES.medium}
            color={colors.gray}
          />
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder="Password"
            onChangeText={setPassword}
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}
            accessible={true}
            accessibilityLabel="Password Input"
          />
        </View>
        {errors.password ? (
          <Text style={styles.error}>{errors.password}</Text>
        ) : null}

        {/*Confirm password input */}
        <View style={styles.inputContainer}>
          <Fontisto
            style={styles.inputIcon}
            name={'locked'}
            size={ICON_SIZES.medium}
            color={colors.gray}
          />
          <TextInput
            style={styles.textInput}
            value={confirmPassword}
            placeholder="Confirm password"
            onChangeText={setConfirmPassword}
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}
            accessible={true}
            accessibilityLabel="Confirm Password Input"
          />
        </View>
        {errors.confirmPassword ? (
          <Text style={styles.error}>{errors.confirmPassword}</Text>
        ) : null}

        <View style={styles.signInButtonContainer}>
          <Pressable onPress={handleSubmit}>
            <Text style={styles.signIn}>Create</Text>
            <LinearGradient
              colors={[colors.primary, 'green']}
              style={styles.linearGradient}>
              <AntDesign
                name={'arrowright'}
                color={colors.white}
                size={ICON_SIZES.medium}
              />
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
