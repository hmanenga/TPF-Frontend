import React, {useState} from 'react';
import {View, TextInput, Button, SafeAreaView, Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from "react-native-vector-icons/AntDesign"
import styles from './styles';
import ICON_SIZES from '../../constants/iconSizes';
import colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.formContainer}>
      <View>
        <View>
          <Image
            source={require('../../../assets/logo.jpeg')}
            style={styles.topImage}
          />
        </View>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello</Text>
        </View>
        <View>
          <Text style={styles.signInText}>Sign in to your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name={'user'}
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
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <View style={styles.signInButtonContainer}>
          <Text style={styles.signIn}>Sign in</Text>
          <LinearGradient
            colors={[colors.primary, 'green']}
            style={styles.linearGradient}>
            <AntDesign
            name={'arrowright'}
            color={colors.white}
            size={ICON_SIZES.medium}
          />
          </LinearGradient>
        </View>
        <Text style={styles.createAccountLink}>Don't have an account?<Text style={styles.createText}>create</Text></Text>
      </View>
    </SafeAreaView>
  );
}
