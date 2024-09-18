/**
 * This function is responsible for rendering the list of tasks and handling the creation of new tasks.
 *
 * @remarks
 * The function uses React Native components and hooks to achieve this. It also uses the `useNavigation` hook
 * from `@react-navigation/native` to navigate to the 'AddTaskScreen' when the 'Add Task' button is pressed.
 *
 * @param props - No props are expected for this function.
 *
 * @returns - A React Native component that renders the task list and the 'Add Task' button.
 */
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import {useState} from 'react';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const taskList = [
  {
    id: '1',
    title: 'First Task',
    description: 'Description for First Task',
    dueDate: '2022-12-31',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Second Task',
    description: 'Description for Second Task',
    dueDate: '2022-12-30',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Third Task',
    description: 'Description for Third Task',
    dueDate: '2022-12-29',
    priority: 'Low',
  },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(taskList);
  const [newTask, setNewTask] = useState('');
  const navigation = useNavigation();

  const handleCreateTask = (e: EventSource) => {
    navigation.navigate('AddTaskScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Todo</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => <TaskListItem task={item} />}
        keyExtractor={item => item.id}
      />
      <Button
        style={{marginVertical: 10}}
        title="Add Task"
        color={colors.submitButton}
        onPress={handleCreateTask}
      />
    </View>
  );
}
