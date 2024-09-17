import {View, Text, FlatList} from 'react-native';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './styles';
import {useState} from 'react';

const taskList = [
  {description: 'First Task'},
  {description: 'Second Task'},
  {description: 'Third Task'},
];
export default function TaskList() {
  const [tasks, setTasks] = useState(taskList);
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Todo</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskListItem task={item} />}
      />
      {/*Add new Task */}
    </View>
  );
}
