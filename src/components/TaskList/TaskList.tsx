import {View, Text, FlatList, TextInput,Button} from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import {useState} from 'react';
import colors from '../../constants/colors';

const taskList = [
  {id: '1', description: 'First Task'},
  {id: '2', description: 'Second Task'},
  {id: '3', description: 'Third Task'},
];
export default function TaskList() {
  const [tasks, setTasks] = useState(taskList);
  const [newTask,setNewTask] = useState('');

  const createTask =(e: EventSource) =>{
    setTasks([...tasks, {id: new Date().getMilliseconds().toString(), description: newTask}]);
    setNewTask('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Todo</Text>
      <FlatList
        data={tasks}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => <TaskListItem task={item} />}
        keyExtractor={item => item.id}
      />
      {/*Add new Task */}
      <TextInput
      value={newTask}
        placeholder="Add new task here..."
        placeholderTextColor={colors.gray}
        style={styles.taskInput}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" color={colors.submitButton} onPress={createTask} />
    </View>
  );
}
