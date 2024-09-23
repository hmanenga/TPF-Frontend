import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../redux/feature/task/taskSlice';
import { RootState } from '../../redux/store';
import { AppDispatch } from '../../redux/store';
import { useFocusEffect } from '@react-navigation/native';
import { deleteTask } from '../../redux/feature/task/taskSlice';
import CustomButton from '../CustomButton/CustomButton';
import { Load } from '../Load/Load';

// Component for displaying an empty task list
const TaskListEmpty = () => (
  <Text style={styles.noItemText}>No task found!</Text>
);

// Component for displaying the list header


// Main TaskList component
const TaskList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, isLoading } = useSelector((state: RootState) => state.task);

  const handleCreateTask = () => {
    navigation.navigate('AddTaskScreen');
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getTasks());
    }, [dispatch]),
  );

  if (isLoading) {
    return <Load size='large'/>;
  }

  const onDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListEmptyComponent={<TaskListEmpty />}
        renderItem={({ item }) => (
          <TaskListItem task={item} onDelete={onDelete} />
        )}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
      <CustomButton
        title="Add Task"
        style={styles.addButton}
        onPress={handleCreateTask}
      />
    </View>
  );
};

export default TaskList;
