import React from 'react';
import {View, Text} from 'react-native';


export default function TaskDetailScreen({route}) {
  const {task} = route.params;
 

  return (
    <View>
      <Text>{task?.title}</Text>
      <Text>{task?.description}</Text>
      <Text>Due Date: {task?.dueDate}</Text>
      <Text>Priority: {task?.priority}</Text>
    </View>
  );
}