// StackNavigator.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../views/HomeScreen/HomeScreen';
import TaskList from '../../components/TaskList/TaskList';
import TaskDetailScreen from '../../views/TaskDetailScreen/TaskDetailScreen';
import AddTaskScreen from '../../views/AddTaskScreen/AddTaskScreen';
import LoginScreen from '../../views/LoginScreen/LoginScreen';
import RegistrationScreen from '../../views/RegistrationScreen/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{title: 'User Registration'}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{title: 'Task List'}}
      />
      <Stack.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{title: 'Add Task'}}
      />
      <Stack.Screen
        name="TaskDetailScreen"
        component={TaskDetailScreen}
        options={{title: 'Task Details'}}
      />
    </Stack.Navigator>
  );
}
