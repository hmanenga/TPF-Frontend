import React, {useState} from 'react';
import {View, Text, TextInput, Button, Pressable, Alert} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import colors from '../../constants/colors';
import CustomRadioButton from '../CustomRadioButton/CustomRadioButton';
import formateDate from '../../utils/helpers';
import {getRealm} from '../../databases/realm';
import {useNavigation} from '@react-navigation/native';
import {TASK_SCHEMA} from '../../constants/schemas';
import uuid from 'react-native-uuid';
import { useDispatch, UseDispatch } from 'react-redux';
import { addTask } from '../../../redux/feature/task/taskSlice';
/**
 * Options for task priority radio buttons.
 * @constant {Array<{id: string, value: string, label: string}>}
 */
const taskPriorityOptions = [
  {
    id: '1',
    value: 'High',
    label: 'High',
    borderColor: colors.white,
    color: colors.white,
    selected: true,
  },
  {
    id: '2',
    value: 'Medium',
    label: 'Medium',
    borderColor: colors.white,
    color: colors.white,
  },
  {
    id: '3',
    value: 'Low',
    label: 'Low',
    borderColor: colors.white,
    color: colors.white,
  },
];

/**
 * TaskForm is a React component that provides a form for adding new tasks.
 * It allows users to input task details including title, description, due date, and priority.
 *
 * @returns {JSX.Element} - A React component rendering the task input form.
 */
export default function TaskForm() {
  // State variables for task details
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    priority: '',
  });
  const [open, setOpen] = useState(false); // Controls the visibility of the date picker
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  /**
   * Handles form fields changes.
   */
  const handleChange = (field: 'title' | 'description') => (value: string) => {
    setTask(prevTask => ({
      ...prevTask,
      [field]: value,
    }));
  };

  /**
   * Handles form submission to create a new task.
   * Resets the input fields upon successful submission.
   */
  const handleSubmit = () => {
   // validateFields();
   dispatch(addTask({task}));

  };

  /**
   * Validates the input fields of the task form.
   * Sets error messages for empty fields and updates the errors state.
   * If all fields are valid, calls the handleAddTask function.
   */
  const validateFields = () => {
    const newErrors = {title: '', description: '', dueDate: '', priority: ''};

    if (!task.title.trim()) {
      newErrors.title = 'Title is missing';
    } else {
      newErrors.title = '';
    }

    if (!task.description.trim()) {
      newErrors.description = 'Description is missing';
    } else {
      newErrors.description = '';
    }

    if (!task.priority.trim()) {
      newErrors.priority = 'Priority is missing';
    } else {
      newErrors.priority = '';
    }

    if (!task.dueDate) {
      newErrors.dueDate = 'Due date is missing';
    } else {
      newErrors.dueDate = '';
    }

    if (Object.values(newErrors).every(error => error === '')) {
      setErrors(newErrors);
      saveTask();
    } else {
      setErrors(newErrors);
    }
  };
  /*const handleBack = () => {
    navigation.goBack();
  };*/
  const saveTask = async () => {
    const realm = await getRealm();
    try {
      setIsLoading(true);
      const newTask = {
        _id: uuid.v4(),
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        created_at: new Date(),
        priority: task.priority,
        completed: false,
      };

      realm.write(() => {
       const created =  realm.create(TASK_SCHEMA, newTask);
       console.log("REGISTERED==>",created);
       
      });

      Alert.alert('Task added successfully!');
      navigation.goBack();
    } catch (e) {
      console.error(e);
      Alert.alert('Task not created!');
    } finally {
      realm.close();
      setIsLoading(false);
    }
  };
  

  // Render the form UI
  return (
    <View style={styles.container}>
      <TextInput
        value={task.title}
        onChangeText={handleChange('title')}
        placeholder="Title"
        style={styles.input}
      />
      {errors.title ? <Text style={styles.errors}>{errors.title}</Text> : null}
      <TextInput
        value={task.description}
        onChangeText={handleChange('description')}
        placeholder="Description"
        style={styles.input}
      />
      {errors.description ? (
        <Text style={styles.errors}>{errors.description}</Text>
      ) : null}
      <Button
        color={colors.primary}
        title="Pick due date"
        onPress={() => setOpen(true)} // Opens the date picker
      />
      <View style={styles.datePickerContainer}>
        <DatePicker
          modal
          open={open}
          date={task.dueDate}
          onConfirm={date => {
            setOpen(false);
            setTask(prevTask => ({
              ...prevTask,
              dueDate: date,
            }));
          }}
          onCancel={() => {
            setOpen(false); // Closes the date picker without setting a date
          }}
        />
        <Text style={styles.selectedDateText}>
          Selected date: {formateDate(task.dueDate)}
        </Text>
      </View>
      {errors.dueDate ? (
        <Text style={styles.errors}>{errors.dueDate}</Text>
      ) : null}
      <View style={styles.radioButtonContainer}>
        <View style={styles.labelContainer}>
          <Text style={{color: 'gray'}}>Task priority</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomRadioButton
            radioButtons={taskPriorityOptions}
            onPress={
              value =>
                setTask(prevTask => ({
                  ...prevTask,
                  priority: value,
                })) // Sets the priority when a radio button is selected
            }
            selectedId={task.priority} // Controls the selected radio button
          />
        </View>
      </View>
      {errors.priority ? (
        <Text style={styles.errors}>{errors.priority}</Text>
      ) : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}
