import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../../screens/RegistrationScreen/RegistrationScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
  </Stack.Navigator>
);

export default AuthStack;
