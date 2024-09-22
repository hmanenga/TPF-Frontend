import React, { useRef } from 'react';
import {
  View,
  Text,
  PanResponder,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles, { createDynamicContentStyle } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  ICON_SIZE_XS } from '../../config/constants';
import { RootStackParamList, Task } from '../../types/types';
import { formateText } from '../../utils/helpers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface TaskListItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

// Vertical line component
const VerticalLine = () => <View style={styles.verticalLine} />;

// Task Description component
const TaskDescription: React.FC<{ task: Task }> = ({ task }) => (
  <View style={styles.taskInfo}>
    <Text style={styles.text}>{formateText(task?.description)}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="schedule" size={ICON_SIZE_XS} />
      <Text style={styles.subText}>{task.dueDate.toLocaleDateString()}</Text>
    </View>
  </View>
);

// Task Priority component
const TaskPriorityAndEdit: React.FC<{ task: Task }> = ({ task }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleNavigateToEditTask = () => navigation.navigate('AddTaskScreen',{taskId:task._id.toString()});
  return (
    <View style={styles.priority}>
      <TouchableOpacity onPress={handleNavigateToEditTask}>
        <Text style={styles.editText}>edit</Text>
      </TouchableOpacity>
      <Text>{task.priority}</Text>
    </View>
  );
} 
  
  
  

// Main Task Info component
const TaskInfo: React.FC<{ task: Task; panHandlers: any }> = ({ task, panHandlers }) => (
  <View style={styles.info} {...panHandlers}>
    <View style={{ flexDirection: 'row' }}>
      <VerticalLine />
      <TaskDescription task={task} />
    </View>
    <TaskPriorityAndEdit task={task} />
  </View>
);

// Delete button component
const DeleteButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
    <Text style={styles.deleteButtonText}>delete</Text>
  </TouchableOpacity>
);

// Main TaskListItem component
const TaskListItem: React.FC<TaskListItemProps> = ({ task, onDelete }) => {
  const translateX = useRef(new Animated.Value(0)).current;
 
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const toValue = gestureState.dx < -50 ? -100 : 0;
        Animated.spring(translateX, {
          toValue,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const handleRemoveTask = () => {
    onDelete(task._id.toString());
  };
  
 

  return (
    <View style={styles.itemContainer}>
      <Animated.View style={createDynamicContentStyle(translateX)}>
        <TaskInfo task={task} panHandlers={panResponder.panHandlers} />
        <DeleteButton onPress={handleRemoveTask} />
      </Animated.View>
    </View>
  );
};

export default TaskListItem;
