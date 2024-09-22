import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Animated, {
  FadeInUp,
  BounceIn,
  FadeInDown,
} from 'react-native-reanimated';
import { validateEmail, validatePassword } from '../../utils/validations';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });



  const { onLogin } = useAuth();
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (validateFields()) {
      const result = await onLogin!(email, password);
      if (result && result.error) {
        Alert.alert(result.msg);
      }
    }
  };

  const validateFields = () => {
    const newErrors = {
      email: '',
      password: '',
    };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password length must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleNavigateToRegister = () => {
    navigation.push('RegistrationScreen');
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
            Login
          </Animated.Text>
        </View>
        <View style={styles.inputContainer}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
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
            entering={FadeInDown.delay(200).duration(1000).springify()}
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
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={{ width: '100%' }}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleNavigateToRegister}>
              <Text style={styles.signupLink}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
