import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import Task from '../../types/types';
import colors from '../../constants/colors';
import CustomRadioButton from '../CustomRadioButton/CustomRadioButton';
import formateDate from '../../utils/helpers';
/**
 * Props for the TaskForm component.
 * @interface TaskFormProps
 * @property {(task: Task) => void} onAddTask - Callback function to handle adding a task.
 */
interface TaskFormProps {
  onAddTask: (task: Task) => void; // Callback function to handle adding a task
}

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
const TaskForm: React.FC<TaskFormProps> = () => {
  // State variables for task details
  const [title, setTitle] = useState(''); // Title of the task
  const [description, setDescription] = useState(''); // Description of the task
  const [dueDate, setDueDate] = useState(''); // Due date of the task
  const [priority, setPriority] = useState(''); // Priority of the task
  const [open, setOpen] = useState(false); // Controls the visibility of the date picker
  const [date, setDate] = useState(new Date()); // Selected date from the date picker

  /**
   * Handles form submission to create a new task.
   * Validates input fields and constructs a new task object.
   * Resets the input fields upon successful submission.
   */
  const handleSubmit = () => {
    if (
      title.trim() &&
      description.trim() &&
      dueDate.trim() &&
      priority.trim()
    ) {
      const newTask: Task = {
        id: new Date().getTime().toString(), // Unique ID for the task
        title,
        description,
        dueDate,
        priority,
      };
      // onAddTask(newTask); // Uncomment to call the task addition callback
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('');
    }
  };

  // Render the form UI
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={styles.input}
      />
      <Button
        color={colors.primary}
        title="Pick due date"
        onPress={() => setOpen(true)} // Opens the date picker
      />
      <View style={styles.datePickerContainer}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date); // Sets the selected date
          }}
          onCancel={() => {
            setOpen(false); // Closes the date picker without setting a date
          }}
        />
        <Text style={styles.selectedDateText}>
          Selected date: {formateDate(date)}
        </Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <View style={styles.labelContainer}>
          <Text style={{color: 'gray'}}>Task priority</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomRadioButton
            radioButtons={taskPriorityOptions}
            onPress={setPriority} // Sets the priority when a radio button is selected
            selectedId={priority} // Controls the selected radio button
          />
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default TaskForm;
