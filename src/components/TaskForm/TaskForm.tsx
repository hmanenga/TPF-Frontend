import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Animated,
  Alert,
} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import { LightThemeColors } from '../../config/colors';
import CustomRadioButton from '../CustomRadioButton/CustomRadioButton';
import { formateDate } from '../../utils/helpers';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, getTask, resetTask } from '../../redux/feature/task/taskSlice';
import CustomButton from '../CustomButton/CustomButton';
import { TASK_PRIORITY_OPTIONS } from '../../config/constants';
import { RootState } from '../../redux/store';
import { Task } from '../../types/types';
import { updateTaskData } from '../../redux/feature/task/taskSlice';
 

/**
 * TaskForm component for adding/editing tasks.
 * @param {Object} route - Route parameters including task ID.
 * @returns {JSX.Element}
 */
export default function TaskForm({ route }) {
  const animation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const { currentTask } = useSelector((state: RootState) => state.task);
  const taskId = route?.params;

  // State variables for task details and validation
  const [task, setTask] = useState({
    _id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    priority: '',
  });
  
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentTask) {
      setTask({
        _id: currentTask._id.toString(),
        title: currentTask.title,
        description: currentTask.description,
        dueDate: currentTask.dueDate,
        priority: currentTask.priority,
      });
    }
  }, [currentTask]);
  

  useEffect(() => {
    if (taskId) {
      dispatch(getTask(taskId));
    }

    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    return () => {
      dispatch(resetTask());
    };
  }, [dispatch, taskId]);

  const animatedStyle = {
    opacity: animation,
    transform: [{
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
      }),
    }],
  };

  const handleChange = (field) => (value) => {
    setTask(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (validateFields()) {
      if (taskId) {
        updateTask();
      } else {
        saveTask();
      }
    }
  };

  const validateFields = () => {
    const newErrors: Partial<Task> = {};
    if (!task.title.trim()) newErrors.title = 'Title is required';
    if (!task.description.trim()) newErrors.description = 'Description is required';
    if (!task.priority.trim()) newErrors.priority = 'Priority is required';
    if (!task.dueDate) newErrors.dueDate = 'Due date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveTask = async () => {
    try {
       dispatch(addNewTask(task));
      navigation.goBack();
      Alert.alert('Sucsess','Task saved successfully');
    } catch (error) {
      console.error('Failed to save the task:', error);
      Alert.alert('Error', 'Failed to save the task');
    }
  };

  const updateTask = async () => {
    try {
      dispatch(updateTaskData(task));
      navigation.goBack();
      Alert.alert('Sucsess','Task updated successfully');
    } catch (error) {
      console.error('Failed to update the task:', error);
      Alert.alert('Error', 'Failed to update the task');
    }
  }

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>New Task</Text>

      <TextInput
        value={task.title}
        onChangeText={handleChange('title')}
        placeholder="Title"
        style={styles.input}
      />
      {errors.title && <Text style={styles.errors}>{errors.title}</Text>}

      <TextInput
        value={task.description}
        onChangeText={handleChange('description')}
        placeholder="Description"
        style={styles.input}
      />
      {errors.description && <Text style={styles.errors}>{errors.description}</Text>}

      <CustomButton
        title="Pick Due Date"
        variant="outline"
        onPress={() => setOpen(true)}
      />
      <View style={styles.datePickerContainer}>
        <DatePicker
          modal
          open={open}
          date={task.dueDate}
          onConfirm={(date) => {
            setOpen(false);
            setTask(prev => ({ ...prev, dueDate: date }));
          }}
          onCancel={() => setOpen(false)}
        />
        <Text style={styles.selectedDateText}>
          selected date: {formateDate(task.dueDate)}
        </Text>
      </View>
      {errors.dueDate && <Text style={styles.errors}>{errors.dueDate}</Text>}

      <View style={styles.radioButtonContainer}>
        <View style={styles.labelContainer}>
          <Text style={{color: LightThemeColors.text}}>Task priority</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomRadioButton
            radioButtons={TASK_PRIORITY_OPTIONS}
            onPress={
              // Sets the priority when a radio button is selected
              value =>
                setTask(prevTask => ({
                  ...prevTask,
                  priority: value,
                })) 
            }
            selectedId={task.priority} 
          />
        </View>
      </View>
      {errors.priority && <Text style={styles.errors}>{errors.priority}</Text>}
      <CustomButton
        title={currentTask ? 'Edit Task' : 'Add Task'}
        variant="primary"
        onPress={handleSubmit}
        disabled={isLoading}
      />
    </Animated.View>
  );
}
