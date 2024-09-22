import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import AddTaskScreen from '../../screens/AddTaskScreen/AddTaskScreen';
import { useAuth } from '../../context/AuthContext';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { authState, onLogin, onLogout } = useAuth();

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button title="Sign Out" color='red' onPress={onLogout} />
          ),
        }}
      />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
