/**
 * This is the main screen component for the application.
 * It displays a list of tasks and provides a container for other components.
 *
 * @returns {JSX.Element} - A React Native view containing the task list component.
 */
import {View} from 'react-native';
import TaskList from '../../components/TaskList/TaskList';


export default function HomeScreen() {
  return (
    <View style={{padding: 10}}>
      <TaskList />
    </View>
  );
}