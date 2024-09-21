// TaskList.tsx

import React, {useCallback} from 'react';
import {View, Text, FlatList, Button, ActivityIndicator} from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getTasks} from '../../redux/feature/task/taskSlice';
import {RootState} from '../../redux/store';
import {AppDispatch} from '../../redux/store';
import {useFocusEffect} from '@react-navigation/native';
import { deleteTask } from '../../redux/feature/task/taskSlice';


const TaskListHeader = () => (
  <Text style={styles.listHeadline}>Tasks List</Text>
);

const TaskListEmpty = () => <Text>No task found</Text>;

const TaskList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {tasks, isLoading} = useSelector((state: RootState) => state.task);

  const handleCreateTask = () => {
    navigation.navigate('AddTaskScreen');
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getTasks());
    }, [dispatch]),
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Loading tasks...</Text>
      </View>
    );
  }
 
  const onDelete = (taskId:string) =>{
    dispatch(deleteTask(taskId));
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        contentContainerStyle={{gap: 10}}
        ListHeaderComponent={<TaskListHeader />}
        ListEmptyComponent={<TaskListEmpty />}
        renderItem={({item}) => <TaskListItem task={item} onDelete={onDelete} />}
        keyExtractor={item => item?._id}
      />
      <Button
        title="Add Task"
        color={colors.submitButton}
        onPress={handleCreateTask}
      />
    </View>
  );
};

export default TaskList;
