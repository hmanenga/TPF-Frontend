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
import {useEffect, useState} from 'react';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getTasks} from '../../../redux/feature/task/taskSlice';
import {RootState} from '../../../redux/store';
import {AppDispatch} from '../../../redux/store';

export default function TaskList() {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {tasks, isLoading} = useSelector((state: RootState) => state.task);


  const handleCreateTask = () => {
    navigation.navigate('AddTaskScreen');
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const headerComponent = () => (
    <Text style={styles.listHeadline}>Tasks List</Text>
  );
  const emptyListComponent = () => <Text>No task found</Text>;

  if (isLoading) {
    return <Text>Loading tasks...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks || []}
        contentContainerStyle={{gap: 10}}
        ListHeaderComponent={headerComponent}
        ListHeaderComponentStyle={styles.listHeader}
        ListEmptyComponent={emptyListComponent}
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
