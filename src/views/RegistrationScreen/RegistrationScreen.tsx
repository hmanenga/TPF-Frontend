import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import {View, TextInput, Pressable, SafeAreaView, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import ICON_SIZES from '../../constants/iconSizes';
import colors from '../../constants/colors';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function RegistrationScreen() {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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

        <View style={styles.signInButtonContainer}>
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
        </View>
      </View>
    </SafeAreaView>
  );
}
