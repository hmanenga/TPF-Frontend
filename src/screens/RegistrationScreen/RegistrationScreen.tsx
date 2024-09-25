import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Animated, {
  
  FadeInUp,
    BounceIn,
  FadeInDown,
} from 'react-native-reanimated';
import {validateEmail, validatePassword} from '../../utils/validations';
import {useAuth} from '../../context/AuthContext';

export default function RegistrationScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const {onLogin, onRegister} = useAuth();
  const navigation = useNavigation();
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignUp = async () => {
    if (validateFields()) {
      const result = await onRegister!(email, password);
      if (result && result.error) {
        Alert.alert(result.msg);
      } else {
        login();
      }
    }
  };

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      Alert.alert(result.msg);
    }
  };
  /**
   * Validates the input fields of the task form.
   * Sets error messages for empty fields and updates the errors state.
   * If all fields are valid, calls the handleRegisterUser function.
   */
  const validateFields = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  
    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    // Validate password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    // Validate confirmPassword
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords must match';
    }
    // Check for errors and proceed accordingly
    const hasErrors = Object.values(newErrors).some(error => error);
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleNavigateBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}
      />

      {/* Lights */}
      <View style={styles.lightContainer}>
        <Animated.Image
          entering={FadeInUp.delay(300).duration(1000).springify().damping(3)}
          style={styles.lightImage}
          source={require('../../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
          style={styles.lightImageSmall}
          source={require('../../../assets/images/light.png')}
        />
      </View>

      {/* Title and Form */}
      <View style={styles.formContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Animated.Text
            entering={BounceIn.delay(500).duration(2000).springify()}
            style={styles.titleText}>
            SignUp
          </Animated.Text>
        </View>
        <View style={styles.inputContainer}>
         <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Email"
              placeholderTextColor={'white'}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              accessibilityLabel="Email Input"
            />
          </Animated.View>
          {errors.email ? (
            <Text style={styles.error}>{errors.email}</Text>
          ) : null}

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={password}
              placeholder="Password"
              placeholderTextColor={'white'}
              onChangeText={setPassword}
              secureTextEntry
              accessibilityLabel="Password Input"
            />
          </Animated.View>
          {errors.password ? (
            <Text style={styles.error}>{errors.password}</Text>
          ) : null}

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor={'white'}
              onChangeText={setConfirmPassword}
              secureTextEntry
              accessibilityLabel="Confirm Password Input"
            />
          </Animated.View>
          {errors.confirmPassword ? (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          ) : null}

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            style={{width: '100%'}}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={styles.loginButtonText}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(1000).duration(1000).springify()}
            style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an acoount?</Text>
            <TouchableOpacity onPress={handleNavigateBack}>
              <Text style={styles.signupLink}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
