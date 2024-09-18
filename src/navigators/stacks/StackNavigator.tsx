// StackNavigator.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../views/HomeScreen/HomeScreen';
import TaskList from '../../components/TaskList/TaskList';
import TaskDetailScreen from '../../views/TaskDetailScreen/TaskDetailScreen';
import AddTaskScreen from '../../views/AddTaskScreen/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TaskList" component={TaskList} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} />

    </Stack.Navigator>
  );
}