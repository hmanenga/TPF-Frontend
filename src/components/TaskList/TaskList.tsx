// TaskList.tsx

import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../redux/feature/task/taskSlice';
import { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';

const TaskListHeader = () => (
  <Text style={styles.listHeadline}>Tasks List</Text>
);

const TaskListEmpty = () => (
  <Text>No task found</Text>
);

const TaskList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, isLoading } = useSelector((state: RootState) => state.task);

  const handleCreateTask = () => {
    navigation.navigate('AddTaskScreen');
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Loading tasks...</Text>
      </View>
    );
  }
  console.log('LIST OF TASKS TO BE RENDERED==>', tasks);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={<TaskListHeader />}
        ListEmptyComponent={<TaskListEmpty />}
        renderItem={({ item }) => <TaskListItem task={item} />}
        keyExtractor={(item) => item?._id}
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
