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
import {View, Text, FlatList, Alert, Button} from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import {useEffect, useState, useCallback} from 'react';
import colors from '../../constants/colors';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getRealm} from '../../databases/realm';
import {TASK_SCHEMA} from '../../constants/schemas';
import { useSelector, UseSelector } from 'react-redux';



export default function TaskList() {
  const [tasks, setTasks] = useState(Array<any>);
  const [newTask, setNewTask] = useState('');
  const navigation = useNavigation();
  const [isLoading, setIsLoadingTask] = useState(false);
  //const {tasks} = useSelector((state:any)=>state.task);
 
  console.log(useSelector((state:any)=>state.task));


  const fetchTasks = async () => {
    setIsLoadingTask(true);
    const realm = await getRealm();
  
    try {
      const response = realm.objects(TASK_SCHEMA).filtered(`completed = false`);
      setTasks(Array.from(response)); // Convert to plain objects
    } catch (e) {
      Alert.alert('Tasks', 'Error fetching tasks');
    } finally {
      setIsLoadingTask(false);
      // Optionally, close the realm if you are managing it manually
      // realm.close();
    }
  };
  

  const handleCreateTask = () => {
    navigation.navigate('AddTaskScreen');
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Use focus effect to refetch tasks when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Tasks List</Text>
      <FlatList
        data={tasks || []}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => <TaskListItem task={item} />}
        keyExtractor={item => item._id}
      />
      <Button
        title="Add Task"
        color={colors.submitButton}
        onPress={handleCreateTask}
      />
    </View>
  );
}
